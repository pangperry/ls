#p6.rb
words =  ['demo', 'none', 'tied', 'evil', 'dome', 'mode', 'live',
          'fowl', 'veil', 'wolf', 'diet', 'vile', 'edit', 'tide',
          'flow', 'neon']

word_groups = {}
words.each do |word|
  if word_groups.has_key?(word.chars.sort.join)
    word_groups[word.chars.sort.join] << word
  else
    word_groups[word.chars.sort.join] = [word]
  end
end

word_groups.each_value{ |value| p value }
