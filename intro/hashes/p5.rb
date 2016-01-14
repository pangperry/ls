my_hash = Hash[(1..6).to_a.zip('a'..'f')]
p my_hash.has_value?('f')
