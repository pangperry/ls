#p1.rb

family = {  uncles: ["bob", "joe", "steve"],
            sisters: ["jane", "jill", "beth"],
            brothers: ["frank","rob","david"],
            aunts: ["mary","sally","susan"]
}

immediate_family =
  family.select { |k,v| (k == :sisters) || (k == :brothers) }

immediate_family.values.flatten
