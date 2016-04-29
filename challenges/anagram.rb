class Anagram
  attr_reader :word
  def initialize(input)
    @input = input
  end

  def match(words)
    sort(words).select { |word| sort(word) == sort(input) }
  end

  def sort(words)
    words.map { |word| word.chars.sort.join } if words.length > 1
  end

end
=begin
sort letters of each string
create a sorted letter array for each array of words and select indexes for words that match
return original array, selected indexes only
deal with cap-senstivity and other edge-cases
=end
