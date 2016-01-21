#q3.rb

sentence = "Humpty Dumpty sat on a wall."
#p sentence.split.reverse.join(" ")
#the above ties the '.' to 'wall'

words = sentence.split(/\W/)
words.reverse!
backwards_sentence = words.join(' ')
p backwards_sentence
