require 'pry'
class Crypto
  attr_reader :text, :normalized_text

  def initialize(text)
    @text = text
    @normalized_text = normalize_plaintext
  end

  def normalize_plaintext
    text.gsub(/\W|_/,"").downcase
  end

  def size
    rows
  end

  def plaintext_segments
    plaintext_segment_arrays.map(&:join)
  end

  def ciphertext
    result = []
    (0..rows).each do |column|
      plaintext_segment_arrays.each do |row|
        result << row[column] if row[column].is_a?(String)
      end
      #binding.pry
    end
    result.join
  end

  def rows
    Math.sqrt(normalized_text.size).ceil
  end


  def plaintext_segment_arrays
    result = []
    normalized_text.chars.each_slice(rows) do |row|
      result << row
    end
    result
  end
end
