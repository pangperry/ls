class PigLatin
  def self.translate(string)
    string.split(" ").map { |word| Rules.new(word).apply_rules }.join(" ")
  end
end

class Rules
  attr_reader :string

  def initialize(string)
    @string = string
  end

  def apply_rules
    edge_case? ? edge_case_rules : general_rules
  end

  private

  def edge_case?
    ch? || qu? || cons_qu? || th? || thr? || sch? || yt? || xr?
  end

  def ch?
    string[0..1] == 'ch'
  end

  def qu?
    string[0..1] == 'qu'
  end

  def cons_qu?
   !%w(a e i o u).include?(string[0]) && string[1..2] == 'qu'
  end

  def th?
    string[0..1] == 'th'
  end

  def thr?
    string[0..2] == 'thr'
  end

  def sch?
    string[0..2] == 'sch'
  end

  def yt?
    string[0..1] == 'yt'
  end

  def xe?
    string[0..1] == 'xe'
  end

  def xr?
    string[0..1] == 'xr'
  end

  def edge_case_rules
    word = string.chars

    if cons_qu? || thr? || sch?
      letters = word.shift(3).join
    elsif ch? || qu? || th?
      letters = word.shift(2).join
    elsif yt? || xr?
      letters = ''
    elsif xe?
      letters = word.shift(1).join
    end

    word.join + letters + 'ay'
  end

  def general_rules
    begins_vowel? ? vowel_rule : consontant_rule
  end

  def begins_vowel?
    %w(a e i o u).include?(string[0])
  end

  def vowel_rule
    string + "ay"
  end

  def consontant_rule
    word = string.chars
    letter = word.shift
    (word << letter).join + "ay"
  end
end
