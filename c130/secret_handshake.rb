class SecretHandshake
  #LIST = { 1=> 'wink', 10=> 'double blink', 100=> 'close your eyes', 1000 => 'jump'}.freeze
  LIST = ['reverse', 'jump', 'close your eyes', 'double blink', 'wink']

  def initialize(number)
    @binary = number.to_s(2)#need to deal with invalid numbers here.
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


end
=begin

p SecretHandshake.new(1).commands
p SecretHandshake.new(2).commands
p SecretHandshake.new(4).commands
p SecretHandshake.new(8).commands
p SecretHandshake.new(3).commands
p SecretHandshake.new(19).commands
p SecretHandshake.new(31).commands
p SecretHandshake.new(3).commands
p SecretHandshake.new('piggies').commands

#handshake = SecretHandshake.new "11001"
#handshake.commands # => ["jump","wink"]
=end
