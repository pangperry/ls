# checks if sets of numbers are pythagorean triplets
class Triplet
  def initialize(a, b, c)
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

  # returns an array of triplet objects, which are pythagorean triplets
  def self.where(min_factor: nil, max_factor: nil, sum: nil)
    triplets = TripletFinder.new(min_factor, max_factor, sum).calculate
    triplets.map { |triplet| Triplet.new(triplet[0], triplet[1], triplet[2]) }
  end
end

# given max, min and max or sum and max,finds pythagorean Triplets
class TripletFinder
  attr_reader :min, :max, :sum

  def initialize(min, max, sum)
    @min = min
    @max = max
    @sum = sum
  end

  def calculate
    return find_with_sum if max && sum
    find_with_max
  end

  private

  def find_with_sum
    range.combination(3).select do |a, b, c|
      Triplet.new(a, b, c).pythagorean? && (a + b + c == sum)
    end
  end

  def find_with_max
    range.combination(3).select do |a, b, c|
      Triplet.new(a, b, c).pythagorean?
    end
  end

  def range
    return (min..max).to_a if min && max
    return (1..max).to_a if (max && sum) || max
    nil
  end
end
