class Queens
  DEFAULT_SPACE = '_'
  attr_reader :white, :black

  def initialize(white: [0 ,3], black: [7, 3])
    @white, @black = white, black
    @board = create_board
    fail ArgumentError, "Invalid queen positions" if @black == @white
  end

  def to_s
    place_white_queen
    place_black_queen

    stringify_board
  end

  def attack?
    same_row? || same_column? || diagonal?
  end

  private

  def create_board
    Array.new(8) {Array.new(8,DEFAULT_SPACE) }
  end

  def stringify_board
    @board.map {|row| row.join(' ')}.join("\n")
  end

  def place_white_queen
    @board[white.first][white.last] = 'W'
  end

  def place_black_queen
    @board[black.first][black.last] = 'B'
  end

  def same_row?
    white.first == black.first
  end

  def same_column?
    white.last == black.last
  end

  def diagonal?
    (white.first - black.first).abs == (white.last - black.last).abs
  end
end
