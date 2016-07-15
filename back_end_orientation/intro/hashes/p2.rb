#p2.rb

person = {name: "John Smith"}

address = {street: "Main Street"}

p person.merge(address)
p person
p address

puts "--------"

p person.merge!(address)
p person
p address
