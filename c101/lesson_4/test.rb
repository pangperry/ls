
def count_down(num)
  while num >= 1
    puts num
    count_down(num-1)
  end
end

count_down(3)
