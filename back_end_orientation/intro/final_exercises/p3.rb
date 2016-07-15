my_array = (1..10).to_a
new_array =  my_array.select {|item| item.odd?}
p new_array
