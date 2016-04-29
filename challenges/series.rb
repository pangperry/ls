class Series
  attr_reader :numbers

  def initialize(input)
    @numbers = input.chars.map(&:to_i)
  end

  def slices(n)
    fail ArgumentError, "n to big for string" if n > numbers.length
    numbers.each_cons(n).to_a
  end
end
