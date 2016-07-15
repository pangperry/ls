# q4.rb

def tricky_method_two(a_string_param, an_array_param)
  a_string_param.gsub!('pumpkins', 'rutabaga') #mutates the caller and will change varaible outside of the method
  an_array_param = ['pumpkins', 'rutabaga'] #doesn't mutate the caller (i.e., a new object is created) and will not change the value of array outside of method
end

my_string = "pumpkins"
my_array = ["pumpkins"]
tricky_method_two(my_string, my_array)

puts "My string looks like this now: #{my_string}"
puts "My array looks like this now: #{my_array}"
