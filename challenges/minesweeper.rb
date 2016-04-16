require 'pry'

class Board
  def self.transform(inp)
    iterator = Iterator.new(inp)
    iterator.count_bombs
  end
end

class Iterator
  attr_accessor :board
  attr_reader :counter

  def initialize(board)
    @board = board
    @counter = Counter.new(board)
  end

  def count_bombs
    board.each_with_index do |row, row_index|
      white_space = row.index(" ")

      until white_space == nil do
        board[row_index][white_space] =
          "#{counter.bombs_around(row_index,white_space)}"

        white_space = row.index(" ")
      end
    end
    board.map { |array| array.gsub("0", " ") }
  end
  #refactor scan white space(do something)
end

class Counter
  BOMB = "*"
  attr_reader :board
  attr_accessor :row_index, :column_index

  def initialize(board)
    @board = board
  end

  def bombs_around(row, column)
    self.row_index = row
    self.column_index = column

    bombs =
      surrounding_spaces.map { |space| space == BOMB }

    bombs.count(true)
  end

  def surrounding_spaces
    [left, right, up_right, up_left, up, down, down_right, down_left]
  end

  def left
    board[row_index][column_index-1]
  end

  def right
    board[row_index][column_index+1]
  end

  def up_right
    board[row_index-1][column_index+1]
  end

  def up_left
    board[row_index-1][column_index-1]
  end

  def up
    board[row_index-1][column_index]
  end

  def down
    board[row_index+1][column_index]
  end

  def down_right
    board[row_index+1][column_index+1]
  end

  def down_left
    board[row_index+1][column_index-1]
  end
end
