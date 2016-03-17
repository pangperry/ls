require 'pry'
class Robot
  ORIENTATIONS = [:north, :west, :south, :east]
  RIGHT = ORIENTATIONS
  LEFT = ORIENTATIONS.reverse

  attr_reader :bearing

  def orient(orientation)
    raise ArgumentError unless ORIENTATIONS.include?(orientation)
    @bearing = orientation
  end

  def turn_right
    @bearing =RIGHT[RIGHT.find_index(bearing)-1]
  end

  def turn_left
    @bearing =LEFT[LEFT.find_index(bearing)-1]
  end

  def at(x,y)
    @x = x
    @y = y
  end

  def coordinates
    [@x,@y]
  end

  def advance
    case
    when bearing == :north
      @y += 1
    when bearing == :south
      @y -= 1
    when bearing == :east
      @x += 1
    when bearing == :west
      @x -= 1
    end
  end
end

class Simulator
  COMMANDS = { 'L' => :turn_left, 'R' => :turn_right, 'A' => :advance }

  def instructions(string)
    string.chars.map { |letter| COMMANDS[letter] }
  end

  def place(robot, x:, y:, direction:)
    robot.at(x, y)
    robot.orient(direction)
  end

  def evaluate(robot, string)
    instructions(string).map { |command| robot.send(command) }
  end
end
