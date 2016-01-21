# q3.rb

def tricky_method(a_string_param, an_array_param)
  a_string_param += "rutabaga"
  an_array_param << "rutabaga"
end

my_string = "pumpkins"
my_array = ["pumpkins"]
tricky_method(my_string, my_array)

puts "My string looks like this now: #{my_string}" #displays "pumpkins" because String+= doesn't mutate the calle
puts "My array looks like this now: #{my_array}" # displays ["pumpkins", "rutabaga"] because Array#<< mutates the caller
