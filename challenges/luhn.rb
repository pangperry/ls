require 'pry'
class Luhn
  attr_reader :numbers

  def initialize(input)
    @numbers = input.to_s.chars.map(&:to_i).reverse
  end

  def self.create(number)
    num_with_zero = number * 10
    checker = Luhn.new(num_with_zero)
    return num_with_zero if checker.valid?

    new_digit =
      checker.checksum % 10 == 0 ? 0 : 10 - checker.checksum % 10
    num_with_zero + new_digit
  end

  def addends
    output = []

    numbers.each_with_index do |num, idx|
      if idx.even?
        output << num
      elsif num * 2 < 10
        output << num * 2
      else
        output << (num * 2) - 9
      end
    end
    output.reverse
  end

  def checksum
    addends.inject(:+)
  end

  def valid?
    checksum % 10 == 0
  end
end
