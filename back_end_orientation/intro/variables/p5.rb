#p5.rb

#problem 1
x = 0
3.times do
  x += 1
end
puts x

#problem 2
y = 0
3.times do
  y += 1
  x = y
end
puts x

#the first problem prints 3 without error.
#the second problem throws an undefined local variable error.
#the error is caused because x is only defined locally in the times do/end
#block so is not available outside of that scope.
