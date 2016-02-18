# ex6.rb

# access the instance variable directly from the object by calling
# instance_variable_get("@volume") on the instance

# or..

class Cube
  attr_reader :volume

  def initialize(volume)
    @volume = volume
  end
end

#or...
#
class Cube
  def initialize(volume)
    @volume = volume
  end

  def volume
    @volume
  end
end

