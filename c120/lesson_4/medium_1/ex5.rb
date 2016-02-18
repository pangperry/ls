# ex5.rb
#this also returns object...not good. see alt_ex5.rb
class KrispyKreme
  attr_reader :filling_type, :glazing, :donut_type

  def initialize(filling_type, glazing)
    @filling_type = filling_type
    @glazing = glazing
    @donut_type = get_type(filling_type, glazing)
  end

  def get_type(da_fillin, da_glazin)
    case
    when da_fillin == nil && da_glazin == nil
      "Plain"
    when da_fillin == "Vanilla" && da_glazin == nil
      "Vanilla"
    when da_fillin == nil && da_glazin == "sugar"
      "Plain with sugar"
    when da_fillin == nil && da_glazin == "chocolate sprinkles"
      "Plain with chocolate sprinkles"
    when da_fillin == "Custard" && da_glazin == "icing"
      "Custard with icing"
    end
  end

  def to_s
    puts donut_type
  end
end

donut1 = KrispyKreme.new(nil, nil)
donut2 = KrispyKreme.new("Vanilla", nil)
donut3 = KrispyKreme.new(nil, "sugar")
donut4 = KrispyKreme.new(nil, "chocolate sprinkles")
donut5 = KrispyKreme.new("Custard", "icing")


puts donut1
puts donut2
puts donut3
puts donut4
puts donut5
