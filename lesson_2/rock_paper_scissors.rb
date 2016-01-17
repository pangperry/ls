VALID_CHOICES = %w(rock paper scissors lizard spock).freeze

def prompt(message)
  puts("=> #{message}")
end

def rock_wins?(first, second)
  first == 'rock' && second == 'scissors' ||
    first == 'rock' && second == 'lizard'
end

def paper_wins?(first, second)
  first == 'paper' && second == 'rock' ||
    first == 'paper' && second == 'spock'
end

def scissors_wins?(first, second)
  first == 'scissors' && second == 'paper' ||
    first == 'scissors' && second == 'lizard'
end

def spock_wins?(first, second)
  first == 'spock' && second == 'rock' ||
    first == 'spock' && second == 'scissors'
end

def lizard_wins?(first, second)
  first == 'lizard' && second == 'spock' ||
    first == 'lizard' && second == 'paper'
end

def win?(first, second)
  rock_wins?(first, second) ||
    paper_wins?(first, second) ||
    scissors_wins?(first, second) ||
    spock_wins?(first, second) ||
    lizard_wins?(first, second)
end

def display_results(player, computer)
  if win?(player, computer)
    prompt("You won!")
  elsif win?(computer, player)
    prompt("Computer won!")
  else
    prompt("It's a tie!")
  end
end

loop do
  choice = ''
  loop do
    prompt("Choose one: #{VALID_CHOICES.join(', ')}")
    choice = gets.chomp

    break if VALID_CHOICES.include?(choice)
    prompt("That's not a valid choice.")
  end

  computer_choice = VALID_CHOICES.sample

  prompt("You chose: #{choice}; Computer chose: #{computer_choice}")

  display_results(choice, computer_choice)

  prompt("Do you want to play again?")
  answer = gets.chomp
  break unless answer.downcase.start_with?('y')
end

prompt("Thank you for playing. Goodbye!")
