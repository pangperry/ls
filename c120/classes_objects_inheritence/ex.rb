module Towable
  def can_tow?(pounds)
    pounds < 2000 ? true : false
  end
end

class Vehicle
  attr_accessor :color
  attr_reader :year
  @@vehicles = 0

  def initialize(year, color, model)
    @year = year
    @color = color
    @model = model
    @speed = 0
    @@vehicles += 1
  end

  def self.vehicles
    puts "we've create #{@@vehicles} vehicles!!"
  end

  def self.mileage(gallons, miles)
    puts "Your car gets #{miles/gallons} mpg"
  end

  def speed_up(number)
    @speed += number
    puts "Acclerating by #{number} mph"
  end

  def break(number)
    @speed -= number
    puts "slowing down by #{number} mph"
  end

  def shut_off
    @speed = 0
  end

  def current_speed
    puts "You're driving #{@speed} mph"
  end

  def to_s
    p self #looking for string interpolation , color and year methods + model instance variable
  end

  def age_interface
    age
  end

  def age
    years_old
  end

  private

  def years_old
    Time.now.year - self.year
  end
end

class MyCar < Vehicle
  DOORS = 4
end

class MyTruck < Vehicle
  include Towable

  DOORS = 2
end


=begin
acclaim = MyCar.new(1992, 'grey', 'Plymouth Acclaim')
acclaim.speed_up(20)
acclaim.current_speed
acclaim.speed_up(40)
acclaim.current_speed
acclaim.break(30)
acclaim.current_speed
acclaim.shut_off
acclaim.current_speed
acclaim.color = "green"
p acclaim.color
p acclaim.year
MyCar.mileage(3,50)
acclaim.to_s
red = MyTruck.new(1993, 'blue', 'Dodge Ram')
Vehicle.vehicles

puts MyCar.ancestors
puts MyTruck.ancestors
puts Vehicle.ancestors
puts red.can_tow?(1950)
puts red.can_tow?(2100)

puts MyCar.ancestors
puts MyTruck.ancestors
puts Vehicle.ancestors
=end

acclaim = MyCar.new(1992, 'grey', 'Plymouth Acclaim')
puts acclaim.age
