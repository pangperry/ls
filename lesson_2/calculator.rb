# calculator.rb

require 'yaml'
LANGUAGE = 'en'

MESSAGES = YAML.load_file('calculator_messages.yml')

def messages(message, lang = 'cn')
  MESSAGES[lang][message]
end

def prompt(message)
  puts "=> #{message}"
end

def valid_number?(num)
  integer?(num) || float?(num)
end

def integer?(num)
  /^\d+$/.match(num)
end

def float?(num)
  /\d/.match(num) && /^\d*\.?\d*$/.match(num)
end

def operation_to_message(op) # see prob 4
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

prompt(messages('welcome', LANGUAGE))
name = ''
loop do
  name = gets.chomp
  break unless name.empty?
  prompt(messages('valid_name', LANGUAGE))
end

loop do # main loop
  num_1 = ''
  loop do
    prompt(messages('first_number', LANGUAGE))
    num_1 = gets.chomp
    break if valid_number?(num_1)
    prompt(messages('invalid_number', LANGUAGE))
  end

  num_2 = ''
  loop do
    prompt(messages('second_number', LANGUAGE))
    num_2 = gets.chomp
    break if valid_number?(num_2)
    prompt(messages('invalid_number', LANGUAGE))
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

  prompt(messages('another_calculation', LANGUAGE))
  answer = gets.chomp
  break unless answer.downcase.start_with?('y')
end

prompt(messages('good_bye', LANGUAGE))
