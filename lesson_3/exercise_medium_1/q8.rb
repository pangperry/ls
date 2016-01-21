# q8.rb
title = 'we come in peace'

def titleize(title)
    title.split(" ").map { |word| word.capitalize }.join(" ")
end

#doesn't mutate the caller
