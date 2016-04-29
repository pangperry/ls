def is_palindrome?(string)
  #fail ArgumentError if string.to_i.to_s != string
  temp = string.chars
  reverse_word = ''
  string.length.times { reverse_word << temp.pop }
  p reverse_word

  p string
end

is_palindrome?('rotor')

