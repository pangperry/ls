# twenty-one.rb
require 'pry'
#
CARDS = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"].freeze
VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11].freeze
KEY = Hash[CARDS.zip(VALUES)]

def prompt(msg)
  puts "=> #{msg}"
end

def initialize_deck(shoe_size = 1)
  new_deck = []

  (4 * shoe_size).times { new_deck << CARDS }
  new_deck.flatten.shuffle
end

def deal_card(hand, deck)
  hand << deck.pop
end

def score(hand)
  hand_score = hand.map { |card| KEY[card] }
  hand_score.inject(:+)
end

def results(player_score, computer_score)
  result = case
           when player_score > 21 && computer_score > 21
             "you both busted!"
           when player_score > 21
             "you busted! dealer wins!"
           when computer_score > 21
             "dealer busted. you won!"
           when player_score > computer_score
             "you win!"
           when player_score == computer_score
             "It's a tie!"
           else
             "you lost!"
           end
  prompt result
end

def adjust_for_aces(hand)
  aces = hand.count("Ace")
  hand_score = score(hand)

  until aces == 0
    hand_score -= 10
    break if hand_score <= 21
    aces -= 1
  end

  hand_score
end

loop do
  deck = initialize_deck

  player_hand = []
  player_score = 0
  computer_hand = []

  2.times do
    deal_card(player_hand, deck)
    deal_card(computer_hand, deck)
  end

  loop do
    player_score = score(player_hand)

    if player_score > 21 && player_hand.count("Ace") == 0
      prompt "#{player_hand} for a score of #{player_score}...you busted!"
    elsif player_score > 21
      player_score =
        adjust_for_aces(player_hand)
    end

    break if player_score > 21

    prompt "Your hand is  #{player_hand}, for a score of #{player_score}"
    prompt "Dealer is showing one #{computer_hand.first}"

    prompt "Do you Hit or Stay?"
    action = gets.chomp
    break unless action.downcase.start_with?("h")

    deal_card(player_hand, deck)
  end

  computer_score = 0

  loop do
    computer_score = score(computer_hand)
    prompt "Dealer is showing #{computer_hand} for #{computer_score}"

    break if computer_score >= 17
    prompt "Dealer hits."
    deal_card(computer_hand, deck)
  end

  prompt results(player_score, computer_score)
  prompt "Play again?(y or n)"
  break unless gets.chomp == "y"
end
