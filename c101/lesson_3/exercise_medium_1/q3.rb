#q3.rb

#puts "the value of 40 + 2 is " + (40 + 2)
#error:  no implicit conversion of Fixnum into String

#solution #1: interpolation
puts "the value of 40 + 2 is " + "#{(40 + 2)}"

#solution #2:
puts "the value of 40 + 2 is " + (40 + 2).to_s
