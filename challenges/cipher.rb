require 'pry'
class Cipher
  TO_NUMBER = Hash[(('a'..'z').to_a).zip((0..25).to_a)]
  TO_LETTER = TO_NUMBER.invert

  def initialize(key)
    @key = key
    @plaintext = ''
    @cipher_text = ''
  end

  def encode(text)
    combine(text, @key)
  end

  def encode(plaintext)

    convert(plaintext)

    text_numbers = convert(plaintext)

    key_numbers = convert(@key)
    p text_numbers.zip(key_numbers)
  end

  def conv

  def convert(text)
    text.chars.map { |letter| TO_NUMBER[letter] }
  end
end

