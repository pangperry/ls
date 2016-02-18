# ex7.rb

# the @@cats_count class variable tracks the number of Cat objects that are instantiated
# after instantiating Cat objects, type Cat.cats_count (which will expose the @@cats_count class variable
class Cat
  @@cats_count = 0

  def initialize(type)
    @type = type
    @age  = 0
    @@cats_count += 1
  end

  def self.cats_count
    @@cats_count
  end
end

garfield = Cat.new("cartoon")
tom = Cat.new("cartoon")

