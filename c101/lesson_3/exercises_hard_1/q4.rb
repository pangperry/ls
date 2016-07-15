# q4.rb

def generate_hexidecimal
  hexidecimals = ((0..9).map(&:to_s).to_a << ('a'..'f').to_a).flatten
  sections = [8,4,4,4,12]
  uuid = ''

  sections.each do |num|
    num.times do
      uuid << hexidecimals.sample
    end
    uuid << '-'
  end
  uuid[0..-2]
end

