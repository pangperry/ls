# ex4.rb
class Cat
  attr_reader :type

  def initialize(type)
    @type = type
  end

  def to_s
    puts "I am a #{type} cat"
  end
end

cat1 = Cat.new("tabby")
cat1.to_s


