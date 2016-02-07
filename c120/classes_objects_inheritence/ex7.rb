class Student
  attr_reader :name
  def initialize(name, grade)
    @name = name
    @grade = grade
  end

  def better_grade_than?(other_student)
    grade > other_student.grade
  end

  protected

  def grade
    @grade
  end
end

mark  = Student.new("Michael", 97)
michael = Student.new("Mark", 95)
puts "Well done!" if mark.better_grade_than?(michael)
