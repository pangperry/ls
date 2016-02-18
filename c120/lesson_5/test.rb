BINARY = (0..10).map { |power| 2**power }.freeze

def add_binary(a,b)
  : = (0..10).map { |power| 2**power }
  c = a + b
  possible_factors = BINARY.select { |k,v| v < c }

  puts possible_factors

end

add_binary(50, 33)


