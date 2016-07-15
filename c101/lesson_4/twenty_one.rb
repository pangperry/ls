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
  deck.pop
end

def score(hand)
  hand_score = hand.map { |card| KEY[card] }
  hand_score.inject(:+)
end

def display_results(player_score, computer_score)
  result = case
           when player_score > 21
             "you busted. dealer wins!"
           when computer_score > 21
             "dealer busted. you won!"
           when player_score > computer_score
             "you win!"
           when player_score == computer_score
             "It's a tie!"
           else
             "you lost!"
           end
  result
end

def bust?(score, hand)
  ace_adjustment = hand.count("Ace") * 10
  adjusted_score = score - ace_adjustment

  if adjusted_score > 21
    true
  else
    false
  end
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
  system 'clear'
  prompt "Welcome to Twenty-One!".upcase
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
    bust = bust?(player_score, player_hand)

    if bust
      prompt "#{player_hand}...You bust!"
      break
    else
      player_score = adjust_for_aces(player_hand)
    end

    puts
    prompt "Your hand is  #{player_hand}, for #{player_score}"
    puts
    prompt "Dealer is showing one #{computer_hand.first}"
    puts
    prompt "Do you (H)it or (S)tay?"
    action = gets.chomp
    break unless action.downcase.start_with?("h")
    prompt "You chose to hit"

    deal_card(player_hand, deck)
  end

  computer_score = 0

  loop do
    computer_score = score(computer_hand)
    bust = bust?(computer_score, computer_hand)

    if bust
      prompt "#{computer_hand}...Computer busts"
      break
    else
      computer_score = adjust_for_aces(computer_hand)
    end

    unless computer_score <= 21
      bust = bust?(computer_score, computer_hand)
    end
    break if bust

    prompt "Dealer is showing #{computer_hand} for #{computer_score}"
    puts
    break if computer_score >= 17
    prompt "Dealer hits."
    deal_card(computer_hand, deck)
  end

  puts
  prompt "------------------------"
  prompt display_results(player_score, computer_score)
  prompt "------------------------"
  puts
  prompt "Play again?(y or n)"
  break unless gets.chomp == "y"
end
