puts "How old are you?"
age = gets.chomp
years = [10,20,30,40]

years.each do |year|
  puts "In #{year} years you will be #{age.to_i + year.to_i}"
end
