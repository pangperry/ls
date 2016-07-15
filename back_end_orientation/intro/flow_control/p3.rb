#p3.rb

def get_num
  puts "enter number between 0 and 100"
  gets.chomp.to_i
end

def evaluate_num
  num = get_num
  answer = case
    when  num < 0
      "you've entered a number less than zero"
    when num < 50
      "you've entered a number between 0 and 50"
    when num <= 100
      "you've entered a number from 51 to 100"
    else
      "you've entered a number greater than 100"
    end
  puts answer
end

evaluate_num
