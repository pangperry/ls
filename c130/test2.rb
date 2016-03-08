class Array
  def accum
    new_array.map do |el|
      yield(el)
    end
  end
end


[1,2,3].accum {|num| num * num }
