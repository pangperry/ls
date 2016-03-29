require 'pry'
class Matrix
  attr_reader :matrix

  def initialize(rows_string)
    @matrix = Extractor.new(rows_string).to_matrix
  end

  def rows
    matrix
  end

  def columns
    generate_columns
  end

  def saddle_points
    find_points
  end

  private

  def find_points
    points = []

    rows.each_with_index do |row, m|
      points << find_point(row, m)
    end

    points
  end

  def find_point(row, m)
      row.each_with_index do |num, n|
        point?(row, num, n) ? [m, n]: nil
      end
  end

  def point?(row, number, index)
    number == row.max && number == columns[index].min
  end

  def generate_columns
    matrix_columns = []

    (0..width - 1).to_a.each do |n|
      matrix_columns << (0..height - 1).to_a.map { |m| matrix[m][n] }
    end

    matrix_columns
  end

  def height
    matrix.length
  end

  def width
    matrix.first.length
  end
end

class Extractor
  attr_reader :string

  def initialize(string)
    @string = string
    @result = nil
  end

  def to_matrix
    map_to_i(array_of_strings)
  end

  def array_of_strings
    string.split("\n").map { |group| group.split(" ") }
  end

  def map_to_i(array)
    array.map { |group| group.map(&:to_i) }
  end
end
