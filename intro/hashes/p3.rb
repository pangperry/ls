#p3.rb

my_hash = Hash[(1..26).zip ('A'..'Z')]
p my_hash
my_hash.each_key{|key| puts key}
