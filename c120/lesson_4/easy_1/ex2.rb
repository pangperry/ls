#ex2.rb

module Speed
  def go_fast
    puts "I am a #{self.class} and going super fast!"
  end
end

class Car
  include Speed #added include Speed
  def go_slow
    puts "I am safe and driving slow."
  end
end

class Truck
  include Speed #added include Speed
  def go_very_slow
    puts "I am a heavy truck and like going very slow."
  end
end

my_prius = Car.new
my_prius.go_fast

my_pickup = Truck.new
my_pickup.go_fast
