# class converts binary numbers to a secret handshake
class SecretHandshake
  LIST = ['reverse', 'jump', 'close your eyes', 'double blink', 'wink'].freeze

  attr_reader :binary, :handshake

  def initialize(input)
    @binary = Binary.new(input).convert
    @handshake = []
  end

  def commands
    binary_to_commands
  end

  private

  def binary_to_commands
    index = - binary.size

    until index == 0
      handshake.unshift(LIST[index]) if binary[index] == '1'
      index += 1
    end
    reverse_handshake if handshake.include?('reverse')

    handshake
  end

  def reverse_handshake
    handshake.delete('reverse')
    handshake.reverse!
  end

  def reverse(handshake)
  end
end

# class converts a valid base 10 number to binary
class Binary
  attr_reader :number

  def initialize(number)
    @number = number
  end

  def convert
    return valid_number if valid?(number)
    0
  end

  private

  def valid_number
    number.to_s(2)
  end

  def valid?(input)
    input.is_a?(Fixnum) && input < 32
  end
end
