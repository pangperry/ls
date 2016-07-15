#p5.rb
numbers = [5,6,7,8]

def factorial(num)
  puts  (1..num).inject(:*)
end

numbers.each { |number| factorial(number) }
