class WordProblem
  OPERATORS = {
    'minus'       => '-',
    'plus'        => '+',
    'divided'     => '/',
    'multiplied'  => '*'
  }.freeze

  attr_reader :question, :operators, :numbers

  def initialize(question)
    @question = question
    @numbers = parse_numbers
    @operators = convert_operators
    validations
  end

  def answer
    iterate_number_pairs
  end

  private

  def validations
    fail ArgumentError if question.include?("cubed")
    fail ArgumentError unless numbers.length == (operators.length + 1)
  end

  def parse_numbers
    question.scan(/-*\d+/).map(&:to_i)
  end

  def convert_operators
    parse_operators.map { |word| OPERATORS[word] }
  end

  def parse_operators
    question.split(' ').select { |word| OPERATORS.keys.include?(word) }
  end

  def iterate_number_pairs
    counter = 0
    total = numbers.first

    numbers.each_cons(2) do |pair|
      total = operation(a: total, b: pair.last, operator: operators[counter])
      counter += 1
      break if counter > operators.length
    end

    total
  end

  def operation(a: nil, b: nil, operator: nil)
    a.send operator, b
  end
end
