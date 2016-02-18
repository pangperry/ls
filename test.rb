def is_square(x)
  return false if x < 0
  Math.sqrt(x).to_i**2 == x ? true : false
end

p is_square(-1)
p is_square(100.40)

