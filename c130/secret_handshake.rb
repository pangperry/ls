class SecretHandshake
  LIST = ['reverse', 'jump', 'close your eyes', 'double blink', 'wink']

  def initialize(input)
    @binary = convert(input)
  end

  def commands
    place = - @binary.size
    handshake = []
    until place == 0
      handshake.unshift(LIST[place]) if @binary[place] == '1'
      place += 1
    end

    if handshake.include?('reverse')
      handshake.delete('reverse')
      handshake.reverse!
    end

    handshake
  end

  def convert(number)
    if valid?(number)
      number.to_s(2)
    elsif valid_binary?(number)
      number
    else
      0
    end
  end

  def valid?(number)
    number.is_a?(Fixnum) && number < 32
  end

  def valid_binary?(str)
    str.size < 6 && /(1|0){1,6}/.match(str)
  end
end




