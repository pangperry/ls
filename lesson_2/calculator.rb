# calculator.rb
# used case instead of conditional if/then

def prompt(message)
  puts "=> #{message}"
end

def valid_number?(num)
  num.to_i != 0
end

def operation_to_message(op)
  case op
  when '1'
    'Adding'
  when '2'
    'Subtracting'
  when '3'
    'Multiplying'
  when '4'
    'Dividing'
  end
end

prompt("Welcome to Calculator! Enter your name:")

name = ''
loop do
  name = gets.chomp
  break unless name.empty?
  prompt("Make sure to use a valid name.")
end

loop do # main loop
  num_1 = ''
  loop do
    prompt("what's the first number?")
    num_1 = gets.chomp
    break if valid_number?(num_1)
    prompt("Hmm...that doesn't look like a valid number")
  end

  num_2 = ''
  loop do
    prompt("what's the second number?")
    num_2 = gets.chomp
    break if valid_number?(num_2)
    prompt("Hmm...that doesn't look like a valid number")
  end

  operator_prompt = <<-MSG
  what operation would you like to perform:
  1) add
  2) subtract
  3) multiply
  4) divide
  MSG

  prompt(operator_prompt)

  operator = ''
  loop do
    operator = gets.chomp

    break if %w(1 2 3 4).include?(operator)
    prompt("Must choose 1,2,3 or 4")
  end

  prompt("#{operation_to_message(operator)} the two numbers...")

  result = case operator
           when "1"
             num_1.to_i + num_2.to_i
           when "2"
             num_1.to_i - num_2.to_i
           when "3"
             num_1.to_i * num_2.to_i
           when "4"
             num_1.to_f / num_2.to_f
           end

  prompt("The result is #{result}")

  prompt("Do you want to perform another calculation? (Y to calculate again)")
  answer = gets.chomp
  break unless answer.downcase.start_with?('y')
end

prompt("Thank you for using the calculator. Goodbye!")
