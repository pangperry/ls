require 'pry'
class Triplet
  attr_accessor :min_factor, :max_factor

  def initialize(a,b,c)
    @a = a
    @b = b
    @c = c
  end

  def sum
    @a + @b + @c
  end

  def product
    @a * @b * @c
  end

  def pythagorean?
    @a**2 + @b**2 == @c**2
  end

  # returns triplet objects
  def self.where(options = {})
    min = options[:min_factor]
    max = options[:max_factor]
    triplet_sum = options[:sum]
    triplet_product = options[:product]

    triplets =
      if min && max
        factors = (min..max).to_a
        factors.combination(3).select { |a,b,c| Triplet.new(a,b,c).pythagorean? }
      elsif max && triplet_sum
        factors = (1..max).to_a
        factors.combination(3).select { |a,b,c| (Triplet.new(a,b,c).pythagorean?) && (a + b + c == triplet_sum) }
      elsif max
        factors = (1..max).to_a
        factors.combination(3).select { |a,b,c| (Triplet.new(a,b,c).pythagorean?) }
      else
        nil
      end

    triplets.map { |triplet| Triplet.new(triplet[0],triplet[1],triplet[2]) }
  end
end
