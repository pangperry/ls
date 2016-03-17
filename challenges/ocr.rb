require 'pry'
class OCR
  NUMBERS = %w(0 1 2 3 4 5 6 7 8 9)

  attr_reader :numbers, :input_sections

  def initialize(input)
    @input = input
  end

  def convert
    sections
    range = (0..(input_length-1)).to_a
    result = ""

    loop do
      section = range[0..2]
      if match_number(section)
        result << match_number(section)
      else
        result << "?"
      end
      3.times { range.shift }
      break if range.length < 3
    end
    result
  end

  def sections
    input_sections = {}
    input_sections[:top] = @input.split("\n")[0]
    input_sections[:middle] = @input.split("\n")[1]
    input_sections[:bottom] = @input.split("\n")[2]
    @input_sections = input_sections
  end

  def input_length
    [@input_sections[:top].length,
     @input_sections[:middle].length,
     @input_sections[:bottom].length].max
  end

  def match_number(range)
    numbers.select { |number, hash| hash  == input_group(range) }.keys.first
    #binding.pry
  end

  def numbers
    {"0" => zero_hash, "1" => one_hash, "2" => two_hash, "3" => three_hash,
     "4" => four_hash, "5" => five_hash, "6" => six_hash, "7" => seven_hash,
     "8" => eight_hash, "9"=> nine_hash}
  end

  def input_group(range)
    number = {}
    number[:top] = @input_sections[:top][range.first..range.last]
    number[:middle] = @input_sections[:middle][range.first..range.last]
    number[:bottom] = @input_sections[:bottom][range.first..range.last]
    number
  end

  def zero_hash
    number = {}
    number[:top] = zero.split("\n")[0]
    number[:middle] = zero.split("\n")[1]
    number[:bottom] = zero.split("\n")[2]
    number
  end

  def one_hash
    number = {}
    number[:top] = one.split("\n")[0]
    number[:middle] = one.split("\n")[1]
    number[:bottom] = one.split("\n")[2]
    number
  end

  def two_hash
    number = {}
    number[:top] = two.split("\n")[0]
    number[:middle] = two.split("\n")[1]
    number[:bottom] = two.split("\n")[2]
    number
  end

  def three_hash
    number = {}
    number[:top] = three.split("\n")[0]
    number[:middle] = three.split("\n")[1]
    number[:bottom] = three.split("\n")[2]
    number
  end

  def four_hash
    number = {}
    number[:top] = four.split("\n")[0]
    number[:middle] = four.split("\n")[1]
    number[:bottom] = four.split("\n")[2]
    number
  end

  def five_hash
    number = {}
    number[:top] = five.split("\n")[0]
    number[:middle] = five.split("\n")[1]
    number[:bottom] = five.split("\n")[2]
    number
  end

  def six_hash
    number = {}
    number[:top] = six.split("\n")[0]
    number[:middle] = six.split("\n")[1]
    number[:bottom] = six.split("\n")[2]
    number
  end

  def seven_hash
    number = {}
    number[:top] = seven.split("\n")[0]
    number[:middle] = seven.split("\n")[1]
    number[:bottom] = seven.split("\n")[2]
    number
  end

  def eight_hash
    number = {}
    number[:top] = eight.split("\n")[0]
    number[:middle] = eight.split("\n")[1]
    number[:bottom] = eight.split("\n")[2]
    number
  end

  def nine_hash
    number = {}
    number[:top] = nine.split("\n")[0]
    number[:middle] = nine.split("\n")[1]
    number[:bottom] = nine.split("\n")[2]
    number
  end

  def three_hash
    number = {}
    number[:top] = three.split("\n")[0]
    number[:middle] = three.split("\n")[1]
    number[:bottom] = three.split("\n")[2]
    number
  end

  def zero
    text = <<-NUMBER.chomp
 _ 
| |
|_|

    NUMBER
    text
  end

  def one
    text = <<-NUMBER.chomp
   
  |
  |

    NUMBER
    text
  end

  def two
    text = <<-NUMBER.chomp
 _ 
 _|
|_ 

    NUMBER
    text
  end

  def three
    text = <<-NUMBER.chomp
 _ 
 _|
 _|

    NUMBER
  end

  def four
    text = <<-NUMBER.chomp
   
|_|
  |

    NUMBER
  end

  def five
    text = <<-NUMBER.chomp
 _ 
|_ 
 _|

    NUMBER
  end

  def six
    text = <<-NUMBER.chomp
 _ 
|_ 
|_|

    NUMBER
  end

  def seven
    text = <<-NUMBER.chomp
 _ 
  |
  |

    NUMBER
  end

  def eight
    text = <<-NUMBER.chomp
 _ 
|_|
|_|

    NUMBER
  end

  def nine
    text = <<-NUMBER.chomp
 _ 
|_|
 _|

    NUMBER
  end
end
=begin
text = <<-NUMBER.chomp
 _
| |
|_|

NUMBER
p Ocr.new(text).convert
=end


