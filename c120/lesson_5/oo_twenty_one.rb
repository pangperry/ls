require 'pry'

class Deck
  attr_accessor :cards

  CARDS = %w(2 3 4 5 6 7 8 9 10 Jack Queen King Ace).freeze
  VALUES = (2..10).to_a + [10, 10, 10, 11]

  def initialize
    @cards = new_deck
  end

  def new_deck
    deck = []
    4.times { deck << CARDS }
    deck.flatten.shuffle
  end
end

module Hand
  VALUES_KEY = Hash[Deck::CARDS.zip(Deck::VALUES)]

  def hit(new_card)
    hand << new_card
  end

  def bust?
    total > 21 ? true : false
  end

  def total
    score = add_cards
    if score < 22 || hand.count("Ace") == 0
      return score
    else
      adjusted_total
    end
  end

  def add_cards
    (hand.map { |card| VALUES_KEY[card] }).inject(:+)
  end

  def adjusted_total
    adjusted = add_cards
    count = hand.count("Ace")
    while count > 0
      adjusted -= 10
      break if adjusted < 22
      count -= 1
    end
    adjusted
  end

  def display_hand
    hand_string = hand.join('-')
    hand_string
  end
end

class Player
  include Hand

  attr_accessor :hand, :name

  def initialize
    @hand = []
    set_name
  end

  def set_name
    puts "\nWhat's your name?"
    name = nil
    loop do
      name = gets.chomp
      break unless name.empty?
    end
    self.name = name
  end
end

class Dealer < Player
  ROBOT_NAMES = ['HAL', 'R2', 'Maximillion'].freeze

  def set_name
    self.name = ROBOT_NAMES.sample
  end
end

class TOGame
  DELAY = 0.7

  attr_reader :dealer, :player
  attr_accessor :deck

  def initialize
    welcome_message
    @deck = Deck.new.cards
    @player = Player.new
    @dealer = Dealer.new
  end

  def play
    loop do
      deal_cards
      show_initial_cards

      player_turn
      show_busted if player.bust?
      dealer_turn
      show_busted if dealer.bust?
      show_result

      if play_again?
        reset_game
        clear
      else
        break
      end
    end
  end

  private

  def welcome_message
    clear
    puts "Welcome to OO Twenty-one!!"
  end

  def clear
    system 'clear'
  end

  def deal_cards
    2.times do
      player.hit(deck.pop)
      dealer.hit(deck.pop)
    end
    puts "#{dealer.name} deals two cards to each of you..."
    sleep(DELAY)
  end

  def show_initial_cards
    puts "#{dealer.name} is showing... "
    sleep(DELAY)
    puts "#{dealer.hand.first}\n\n"
    player_shows_hand
  end

  def player_turn
    loop do
      puts "Do you want to (h)it or (s)tay?"
      answer = answer_loop

      if answer == 's'
        puts "\n#{player.name} stays"
        break
      else
        player_hits
        break if player.bust?
      end
    end
  end

  def answer_loop
    answer = nil
    loop do
      answer = gets.chomp
      break if ['h', 's'].include?(answer)
      puts "Please enter 'h' or 's'."
    end
    answer
  end

  def player_hits
    player.hit(deck.pop)
    puts "\n#{player.name} hits...\n#{player.hand.last}\n\n"
    player_shows_hand
  end

  def player_shows_hand
    puts "#{player.name}'s hand is..."
    sleep(DELAY)
    puts "#{player.display_hand}\n\n"
  end

  def show_busted
    puts "Busted!!"
  end

  def dealer_turn
    loop do
      puts "\n#{dealer.name}'s hand is..."
      sleep(DELAY)
      puts "#{dealer.display_hand}\n"
      break if dealer.bust?
      if dealer.total > 16
        puts "\n#{dealer.name} stays"
        break
      else
        dealer.hit(deck.pop)
      end
    end
  end

  def show_result
    case result
    when :tie
      puts "\nYou tied, #{player.total} to  #{dealer.total}."
    when :win
      puts "\nYou won, #{player.total}  to #{dealer.total}!!!"
    when :lose
      puts "\nYou lost, #{player.total} to  #{dealer.total} :("
    end
  end

  def result
    if player_win?
      :win
    elsif dealer_win?
      :lose
    else
      :tie
    end
  end

  def player_win?
    (dealer.bust? && !player.bust?) || ((player.total > dealer.total) && !player.bust?)
  end

  def dealer_win?
    (player.bust? && !dealer.bust?) || (player.total < dealer.total)
  end

  def play_again?
    puts "would you like to play again(y/n)?"
    answer = gets.chomp
    answer == 'y' ? true : false
  end

  def reset_game
    @deck = Deck.new.cards
    @player.hand = []
    @dealer.hand = []
  end
end

game = TOGame.new
game.play
