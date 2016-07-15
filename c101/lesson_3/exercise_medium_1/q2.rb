#q2.rb

statement = "The Flintstones Rock"

frequency = {}
letters = statement.chars.uniq.delete_if { |letter| /[^a-zA-Z]/.match(letter)}

letters.each { |letter| frequency[letter] =
               statement.scan(letter).count }

p  frequency

#code below is clearer
#result = {}
#letters = ('A'..'Z').to_a + ('a'..'z').to_a
#letters.each do |letter|
#  letter_frequency = statement.scan(letter).count
#  result[letter] = letter_frequency if letter_frequency > 0
# end

