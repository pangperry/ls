#q9.rb

munsters = {
  "Herman" => { "age" => 32, "gender" => "male" },
  "Lily" => { "age" => 30, "gender" => "female" },
  "Grandpa" => { "age" => 402, "gender" => "male" },
  "Eddie" => { "age" => 10, "gender" => "male" },
  "Marilyn" => { "age" => 23, "gender" => "female"}
}

munsters.each do |name, personal_data|
  case personal_data["age"]
  when 0...18
    personal_data["age_group"] = "kid"
  when 18...65
    personal_data["age_group"] = "adult"
  else
    personal_data["age_group"] = "senior"
  end
end

p munsters
