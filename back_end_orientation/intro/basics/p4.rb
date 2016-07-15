#p4.rb
movies = { blade_runner: 1982,
           alien: 1979,
           close_encounters: 1977,
           star_wars: 1977,
           terminator: 1984 }

years = movies.map { |k,v| v }
years.each {|year| puts year }
