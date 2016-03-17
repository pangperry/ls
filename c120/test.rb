module Towable
  def tow
    puts "you are towing something. Yay!!"
  end
end

class Vehicle
  @@vehicles = 0

  attr_accessor :color
  attr_reader :year

  def initialize(year, color, model)
    @year = year
    @color = color
    @model = model
    @current_speed = 0
    @@vehicles += 1
  end

  def self.count
    "number of vehicles created = #{@@vehicles}"
  end

  def self.mileage(miles, gallons)
    miles/gallons
  end

  def age
    calculate_age
  end

  def speed_up(number)
    @current_speed += number.to_i
  end

  def slow_down(number)
    @current_speed -= number.to_i
  end

  def shutoff
    if @current_speed == 0
      puts "your vehicle is shut off and you're done driving."
    else
      puts "you're current speed is #{@current_speed}. Please first decrease to zero."
    end
  end

  def spray_paint(color)
    self.color = color
  end

  def to_s
    "Year: #{year} Model: #{@model.upcase} Color: #{color.upcase}"
  end

  private

  def calculate_age
    now = Time.now
    now.year - self.year
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
egolf = MyCar.new(2015, "blue", "vw")
egolf.speed_up(10)
egolf.shutoff
egolf.slow_down(10)
egolf.shutoff
egolf.year
egolf.spray_paint('yello')
puts egolf.color
MyCar.mileage(300, 15)
puts egolf
truck = MyTruck.new(2011, 'red', 'yay')
puts Vehicle.count
truck.tow
p egolf.age
=end
