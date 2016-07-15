#q5.rb

def factors(number)
  dividend = number
  divisors = []
  number.times do
    divisors << number / dividend if number % dividend == 0
    dividend -= 1
  end
  divisors
end

p factors(10)
# could also do
# while dividend > 0 do
#   divisors << number / dividend if number % dividend == 0
#   dividend -= 1
# end

# number % dividend == 0 is a divisibility check

#the purpose of the second-to-last line in the method is the return the array of factors/divisors
