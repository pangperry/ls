# q1.rb
require 'pry'

WINNING_LINES = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] + # rows
                [[1, 4, 7], [2, 5, 8], [3, 6, 9]] + # cols
                [[1, 5, 9], [3, 5, 7]] # diagnols
INITIAL_MARKER =  ' '.freeze
PLAYER_MARKER = 'X'.freeze
COMPUTER_MARKER = 'O'.freeze

def prompt(msg)
  puts "=> #{msg}"
end

# rubocop:disable Metrics/AbcSize
def display_board(brd)
  system 'clear'
  puts "You're an #{PLAYER_MARKER}"
  puts ""
  puts "     |     |"
  puts "  #{brd[1]}  |  #{brd[2]}  |   #{brd[3]}"
  puts "     |     |"
  puts "-----|-----|-----"
  puts "     |     |"
  puts "  #{brd[4]}  |  #{brd[5]}  |   #{brd[6]}"
  puts "     |     |"
  puts "-----|-----|-----"
  puts "     |     |"
  puts "  #{brd[7]}  |  #{brd[8]}  |   #{brd[9]}"
  puts "     |     |"
  puts ""
end
# rubocop:enable Metrics/AbcSize

def initialize_player_score
  @player_score = 0
end

def initialize_computer_score
  @computer_score = 0
end

def initialize_board
  new_board = {}
  (1..9).each { |num| new_board[num] = INITIAL_MARKER }
  new_board
end

def empty_squares(brd)
  brd.keys.select { |num| brd[num] == INITIAL_MARKER }
end

def joinor(arr, delimiter = ', ', conjunction = 'or ')
  arr.join(delimiter).insert(-2, conjunction)
end

def detect_square_winner(brd)
  detect_squares(brd, COMPUTER_MARKER)
end

def detect_square_threat(brd)
  detect_squares(brd, PLAYER_MARKER)
end

def detect_squares(brd, type)
  WINNING_LINES.each do |line|
    if brd.values_at(*line).count(type) == 2 &&
       brd.values_at(*line).count(INITIAL_MARKER) == 1

      square = line.find { |num| brd[num] == INITIAL_MARKER }
      return square
    else
      next
    end
  end
  nil
end

def place_piece!(brd, current_player)
  if current_player == "Computer"
    computer_places_piece!(brd)
  else
    player_places_piece!(brd)
  end
end

def player_places_piece!(brd)
  square = ''
  loop do
    prompt "Choose a position to place the peace: #{joinor(empty_squares(brd), '; ')}"
    square = gets.chomp.to_i
    break if empty_squares(brd).include?(square)
    prompt "Sorry, that's not a valid choice"
  end

  brd[square] = PLAYER_MARKER
end

def computer_places_piece!(brd)
  square =
    if detect_square_winner(brd)
      detect_square_winner(brd)
    elsif detect_square_threat(brd)
      detect_square_threat(brd)
    else
      empty_squares(brd).sample
    end

  brd[square] = COMPUTER_MARKER
end

def alternate_player(player)
  player == 'Player' ? 'Computer' : 'Player'
end

def board_full?(brd)
  empty_squares(brd).empty?
end

def someone_won?(brd)
  !!detect_winner(brd)
end

def keep_score(winner)
  winner == 'Player' ? @player_score += 1 : @computer_score += 1
end

def win_five?(score)
  score == 5
end

# rubocop:disable Metrics/AbcSize
def detect_winner(brd)
  WINNING_LINES.each do |line|
    if brd.values_at(line[0], line[1], line[2]).count(PLAYER_MARKER) == 3
      return 'Player'
    elsif brd.values_at(line[0], line[1], line[2]).count(COMPUTER_MARKER) == 3
      return 'Computer'
    end
    if brd.values_at(*line).count(PLAYER_MARKER) == 3
      return 'Player'
    elsif brd.values_at(*line).count(COMPUTER_MARKER) == 3
      return 'Computer'
    end
  end
  nil
end
# rubocop:enable Metrics/AbcSize

initialize_player_score
initialize_computer_score

loop do
  board = initialize_board
  current_player = "Player"

  loop do
    display_board(board)
    place_piece!(board, current_player)
    current_player = alternate_player(current_player)
    break if someone_won?(board) || board_full?(board)
  end

  display_board(board)

  if someone_won?(board)
    prompt "#{detect_winner(board)} won!"
    keep_score(detect_winner(board))
  else
    prompt "It's a tie!"
  end

  if win_five?(@player_score)
    prompt("Player wins 5! Game over!")
    break
  elsif win_five?(@computer_score)
    prompt("Computer wins 5! Game over!")
    break
  else
    puts "Current score is Player: #{@player_score}, Computer: #{@computer_score}"
  end

  prompt "Play again?(y or n)"
  answer = gets.chomp
  break unless answer.downcase.start_with?('y')
end

prompt "Thanks for playing tic tac toe. Goodbye!"
