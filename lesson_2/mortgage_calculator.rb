# mortgage_calculator.rb

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
  /^\d+\.{1}\d+$/.match(num)
end

def confirm?(amount, symbol)
  if symbol == '$'
    prompt("You've entered: $ #{amount}")
  elsif symbol == '%'
    prompt("You've entered: #{amount} %")
  else
    prompt("You've entered: #{amount} Years")
  end
  prompt("If this is correct, please press Y")
  gets.chomp.downcase == 'y'
end

prompt('Welcome to the mortgage calculator!')

loop do
  prompt('What is the total amount of the loan?')
  loan = ''
  loop do
    loan = gets.chomp
    break if valid_number?(loan) && confirm?(loan, '$')
    prompt("Please re-enter the ammount. Omit commas and $.")
  end

  prompt('what is the APR?')
  apr = ''
  loop do
    apr = gets.chomp
    break if valid_number?(apr) && confirm?(apr, '%')
    prompt("Please re-enter the APR.")
  end

  prompt('what is the loan duration')
  loan_duration = ''
  loop do
    loan_duration = gets.chomp
    break if integer?(loan_duration) && confirm?(loan_duration, 'Y')
    prompt('Please re-enter loan duration in years (exclude decimals)')
  end

  L = loan.to_f.round(2)
  n = loan_duration.to_i * 12 # monthly loan duration
  c = (apr.to_f * 0.01 / 12).round(4) # monthly interest rate
  monthly_payment = (L * (c * ((1 + c)**n)) /
                      (((1 + c)**n) - 1)).round(2)
  prompt("Your monthly payment on a #{loan_duration} year, #{apr}% loan is $ #{monthly_payment}")

  prompt("would you like to calculate another monthly mortgage payment?")
  break if gets.chomp.downcase == 'y'
end

prompt('Thank you for using Mortgage Calcualator.')
