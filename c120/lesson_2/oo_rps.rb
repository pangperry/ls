class Score
  attr_accessor :human, :computer

  def initialize
    @player = 0
    @computer = 0
  end

  def point_human
    self.human += 1
  end

  def point_computer
    self.computer += 1
  end
end

class Move
  VALUES = ['rock', 'paper', 'scissors', 'lizard', 'spock'].freeze

  def initialize(value)
    @value = value
  end

  def >(other_move)
    rock_wins?(other_move) ||
      paper_wins?(other_move) ||
      scissors_wins?(other_move) ||
      lizard_wins?(other_move) ||
      spock_wins?(other_move)
  end

  def <(other_move)
    rock_loses?(other_move) ||
      paper_loses?(other_move) ||
      scissors_loses?(other_move) ||
      lizard_loses?(other_move) ||
      spock_loses?(other_move)
  end

  def rock_wins?(other_move)
    rock? && (other_move.scissors? || other_move.lizard?)
  end

  def paper_wins?(other_move)
    paper? && (other_move.rock? || other_move.spock?)
  end

  def scissors_wins?(other_move)
    scissors? && (other_move.paper? || other_move.lizard?)
  end

  def lizard_wins?(other_move)
    lizard? && (other_move.spock? || other_move.paper?)
  end

  def spock_wins?(other_move)
    spock? && (other_move.rock? || other_move.scissors?)
  end

  def rock_loses?(other_move)
    rock? && (other_move.spock? || other_move.paper?)
  end

  def paper_loses?(other_move)
    paper? && (other_move.lizard? || other_move.scissors?)
  end

  def scissors_loses?(other_move)
    scissors? && (other_move.rock? || other_move.spock?)
  end

  def lizard_loses?(other_move)
    lizard? && (other_move.scissors? || other_move.rock?)
  end

  def spock_loses?(other_move)
    spock? && (other_move.lizard? || other_move.paper?)
  end

  def scissors?
    @value == 'scissors'
  end

  def rock?
    @value == 'rock'
  end

  def paper?
    @value == 'paper'
  end

  def lizard?
    @value == 'lizard'
  end

  def spock?
    @value == 'spock'
  end

  def to_s
    @value
  end
end

class Player
  attr_accessor :move, :name, :score

  def initialize
    set_name
  end
end

class Human < Player
  def set_name
    n = ''
    loop do
      puts "What's your name?"
      n = gets.chomp
      break unless n.empty?
      puts "Sorry, must enter a value."
    end
    self.name = n
  end

  def choose
    choice = nil
    loop do
      puts "Please choose rock, paper, scissors, lizard, or spock:"
      choice = gets.chomp
      break if Move::VALUES.include? choice
      puts "Sorry, invalid choice."
    end
    self.move = Move.new(choice)
  end
end

class Computer < Player
  def set_name
    self.name = ['R2D2', 'Hal', 'Chappie', 'Sonny', 'Number 5'].sample
  end

  def choose
    self.move = Move.new(Move::VALUES.sample)
  end
end

# Game Orchestration Engine
class Game
  attr_accessor :human, :computer, :score

  def initialize
    @human = Human.new
    @computer = Computer.new
    @score = Score.new
  end

  def display_welcome_message
    puts "Welcome to Rock, Paper, Scissors!"
  end

  def display_goodbye_message
    puts "Thanks for playing Rock, Paper, Scissors! Goodbye!"
  end

  def display_moves
    puts "#{human.name} chose #{human.move}."
    puts "#{computer.name} chose #{computer.move}"
  end

  def winner
    if human.move > computer.move
      return "human"
    elsif human.move < computer.move
      return "computer"
    end
  end

  def display_winner
    if winner == "human"
      puts "#{human.name} won!"
      score.point_human
    elsif winner == "computer"
      puts "#{computer.name} won!"
      score.point_computer
    else
      puts "It's a tie!"
    end
  end

  def display_score
    puts "The score is #{human.name}: #{score.human} to #{computer.name}: #{score.computer}"
  end

  def game_over?
    (score.human > 3) || (score.computer > 3)
  end

  def play_again?
    answer = nil
    loop do
      puts "Would you like to play again?"
      answer = gets.chomp
      break if ['y', 'n'].include? answer
      puts "Sorry, musy be y or n."
    end

    return true if answer == 'y'
    false
  end

  def play
    display_welcome_message
    loop do
      human.choose
      computer.choose
      display_moves
      display_winner
      display_score
      break if game_over?
      break unless play_again?
    end
    display_goodbye_message
  end
end

Game.new.play
