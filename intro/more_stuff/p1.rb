#p1.rb
words = ["laboratory", "experiment", "Pans Labyrinth", "elaborate", "polar bear"]

def check_lab?(word)
  puts word if  word =~ /lab/
end

words.each { |word| check_lab?(word) }
