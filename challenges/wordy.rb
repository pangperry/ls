class WordProblem
  OPERATORS = {
    'minus' => '-',
    'plus'  => '+',
    'divided' => '/',
    'multiplied' => '*',
    }

  attr_reader :question

  def initialize(question)
    @question = question
  end

  def answer
    simple_operation? ? simple_operation : complex_operation
  end

  private

  def simple_operation?
    validations
    stripped.length < 3
  end

  def validations
    fail ArgumentError if question.include?("cubed")
    fail ArgumentError if question.include?("Who")
  end

  def stripped
    remove_by_from(terms_and_operators)
  end

  def remove_by_from(array)
    array.delete('by') if array.include?('by')
    array
  end

  def terms_and_operators
    question.scan(/-*\d+.+-*\d+/).first.split(" ")
  end

  def simple_operation
    operator = stripped[1]
    a        = stripped[0].to_i
    b        = stripped[2].to_i
    operation(operator, a, b)
  end

  def operation(operator, a, b)
    a.send OPERATORS[operator], b
  end

  def complex_operation
    counter  = 3
    total    = simple_operation
    operator = stripped[counter]
    b        = stripped[counter + 1].to_i

    while counter < stripped.length
      total = operation(operator, total, b)
      counter += 2
    end

    total
  end
end
