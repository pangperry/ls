#q10.rb

flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "BamBam"]
f_hash = {}

flintstones.each_with_index do |flintstone, index|
  f_hash[flintstone] = index
end

p f_hash
