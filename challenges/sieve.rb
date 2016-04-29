require 'pry'

class Sieve
  attr_reader :range, :primes_list

  def initialize(n)
    @range = (2..n).to_a
    @primes_list = []
  end

  def primes

    until range.empty?
      prime = range.shift
      primes_list << prime
      mark_numbers(range, prime)
    end
    primes_list
  end

  def mark_numbers(range, prime)
    range.reject! {|number| number % prime == 0 }
  end
end
