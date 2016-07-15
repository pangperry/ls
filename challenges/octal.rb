class Octal
  attr_reader :number, :input

  def initialize(input)
    @input = input
    @number = input.chars.map(&:to_i)
  end

  def to_decimal
    return 0 if /[\D89]/ =~ input

    number.reverse!.each_with_index.map do |item, index|
      item * (8**index)
    end.inject(:+)
  end
end
