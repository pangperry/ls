#q2.rb

total = 0
ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 5843, "Eddie" => 10, "Marilyn" => 22, "Spot" => 237 }
ages.each_value { |value| total += value }
#ages.values.inject(:+)
p total

