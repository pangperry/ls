# q4.rb

advice = "Few things in life are as important as house training your pet dinosaur."
p advice.slice!("Few things in life are as important as ")
#advice.slice!(0, advice.index('house'))
p advice

#bonus:
#String#slice doesn't mutate the caller so advice would be left unchanged
