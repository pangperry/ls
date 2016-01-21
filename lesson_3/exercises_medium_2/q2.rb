#q2.rb
munsters = {
  "Herman" => { "age" => 32, "gender" => "male" },
  "Lily" => { "age" => 30, "gender" => "female" },
  "Grandpa" => { "age" => 402, "gender" => "male" },
  "Eddie" => { "age" => 10, "gender" => "male" },
  "Marilyn" => { "age" => 23, "gender" => "female"}
}


munsters.each do |name, personal_data|
  puts "#{name} is a #{personal_data["age"]} year old #{personal_data["gender"]}."
end

#or with each_pair:
#munsters.each_pair do |name, details|
#  puts "#{name} is a #{details['age']} year old #{details['gender']}"
#  end
