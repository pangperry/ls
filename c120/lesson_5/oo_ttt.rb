# oo_ttt.rb
require 'pry'

class Board
  WINNING_LINES = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] + # rows
                  [[1, 4, 7], [2, 5, 8], [3, 6, 9]] + # cols
                  [[1, 5, 9], [3, 5, 7]]

  def initialize
    @squares = {}
    (1..9).each { |key| @squares[key] = Square.new }
  end

  def []=(key, marker)
    @squares[key].marker = marker
  end

  def unmarked_keys
    @squares.keys.select { |key| @squares[key].unmarked? }
  end

  def full?
    unmarked_keys.empty?
  end

  def someone_won?
    !!winning_marker
  end

  def winning_marker
    WINNING_LINES.each do |line|
      squares = @squares.values_at(*line)
      if three_identical_markers?(squares)
        return squares.first.marker
      end
    end
    nil
  end

  def at_risk_square?(marker)
    !!detect_at_risk_square(marker)
  end

  def detect_at_risk_square(marker)
    WINNING_LINES.each do |line|
      squares = @squares.values_at(*line)
      unmarked = squares.select(&:unmarked?)
      marked = squares.select { |square| square.marker == marker }
      if marked.count == 2 && unmarked.count == 1
        return @squares.select { |k, v| line.include?(k) && v.marker == Square::INITIAL_MARKER }.keys.first
      end
    end
    nil
  end

  def reset
    (1..9).each { |key| @squares[key] = Square.new }
  end

  # rubocop:disable Metrics/AbcSize
  def draw
    puts "     |     |     "
    puts "  #{@squares[1]}  |  #{@squares[2]}  |  #{@squares[3]}   "
    puts "     |     |     "
    puts "-----------------"
    puts "     |     |     "
    puts "  #{@squares[4]}  |  #{@squares[5]}  |  #{@squares[6]}   "
    puts "     |     |     "
    puts "-----------------"
    puts "     |     |     "
    puts "  #{@squares[7]}  |  #{@squares[8]}  |  #{@squares[9]}   "
    puts "     |     |     "
  end
  # rubocop:enable Metrics/AbcSize

  private

  def three_identical_markers?(squares)
    markers = squares.select(&:marked?).collect(&:marker)
    return false if markers.size != 3
    markers.min == markers.max
  end
end

class Square
  INITIAL_MARKER = " ".freeze
  attr_accessor :marker

  def initialize(marker=INITIAL_MARKER)
    @marker = marker
  end

  def to_s
    @marker
  end

  def unmarked?
    marker == INITIAL_MARKER
  end

  def marked?
    marker != INITIAL_MARKER
  end
end

class Player
  VALID_MARKERS = ['X', 'O'].freeze
  attr_reader :marker, :name
  attr_accessor :score

  def initialize
    @name = ''
    @marker = ''
    @score = 0
  end

  def set_name
    name = ''

    puts "Please enter your name:"
    loop do
      name = gets.chomp
      break unless name.empty?
    end

    @name = name
  end

  def choose_marker
    marker = ''
    puts "please choose a marker"
    loop do
      marker = gets.chomp
      break if VALID_MARKERS.include?(marker)
      puts "Please enter a valid marker"
    end
    @marker = marker
  end
end

class Computer < Player
  def set_name
    @name = ['HAL', 'Maximilian', 'Sonny'].sample
  end

  def choose_marker(other_marker)
    @marker = VALID_MARKERS.reject { |computer_marker| computer_marker == other_marker }.first
  end
end

class TTTGame
  attr_reader :board, :human, :computer

  def initialize
    clear
    @board = Board.new
    @human = Player.new
    @computer = Computer.new
    @current_marker = nil
  end

  def play
    setup_game

    loop do
      display_board

      loop do
        current_player_moves
        break if board.someone_won? || board.full?
        clear_sceen_and_display_board
      end
      display_and_track_result
      break if five_wins?
      break unless play_again?
      reset
    end
    display_final_score
    display_goodbye_message
  end

  private

  def setup_game
    display_welcome_message
    human.set_name
    computer.set_name
    human.choose_marker
    computer.choose_marker(human.marker)
    who_plays_first
  end

  def display_welcome_message
    puts "Welcome to Tic Tac Toe!"
    puts ""
  end

  def who_plays_first
    puts "Do you want to go first? (y/n)"
    answer = ''

    loop do
      answer = gets.chomp
      break if answer.casecmp('y') == 0 || answer.casecmp('n') == 0
    end

    @current_marker =
      answer.casecmp('y') == 0 ? human.marker : computer.marker
  end

  def display_board
    puts "#{human.name} is #{human.marker}. #{computer.name} is #{computer.marker}"
    puts ""
    board.draw
    puts ""
  end

  def current_player_moves
    if @current_marker == human.marker
      human_moves
      @current_marker = computer.marker
    else
      computer_moves
      @current_marker = human.marker
    end
  end

  def human_moves
    puts "Choose a square (#{joinor(board.unmarked_keys)})"
    square = nil
    loop do
      square = gets.chomp.to_i
      break if board.unmarked_keys.include?(square)
      puts "Sorry, that's not a value choice."
    end

    board[square] = human.marker
  end

  def joinor(arr, delimiter = ', ', conjunction = 'or ')
    arr[-1] = "#{conjunction} #{arr.last}" if arr.size > 1
    arr.join(delimiter)
  end

  def computer_moves
    square = board.detect_at_risk_square(human.marker)
    square = board.unmarked_keys.sample unless square
    board[square] = computer.marker
  end

  def display_play_again_message
    puts "Let's play_again!"
    puts ""
  end

  def clear_sceen_and_display_board
    clear
    display_board
  end

  def display_and_track_result
    clear_sceen_and_display_board

    case board.winning_marker
    when human.marker
      puts "You won!"
      human.score += 1
    when computer.marker
      puts "Computer won!"
      computer.score += 1
    else
      puts "It's a tie!"
    end
  end

  def five_wins?
    if computer.score > 4
      return true
    elsif human.score > 4
      return true
    else
      false
    end
  end

  def display_final_score
    puts "Final score: Human: #{human.score}, Computer: #{computer.score}"
  end

  def play_again?
    answer = nil
    loop do
      puts "Would you like to play again? (y/n)"
      answer = gets.chomp.downcase
      break if %w(y n).include? answer
      puts "Sorry, must be y or n"
    end

    answer == 'y'
  end

  def reset
    board.reset
    @current_marker = FIRST_TO_MOVE
    clear
  end

  def clear
    system 'clear'
  end

  def display_goodbye_message
    puts "Thanks for playing Tic Tac Toe! Goodbye!"
  end
end

game = TTTGame.new
game.play
