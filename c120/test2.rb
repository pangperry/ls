
def longest_consec(strarr, k)
  n = strarr.length
  return "" if (n == 0 || k > n || k <= 0)
  return strarr.detect { |string| strarr.max == string }

  pair_sums = strarr.each_cons(k).map { |str1,str2| str1.size + str2.size }
  first_string = pair_sums.index(pair_sums.max)
  strarr[first_string] + strarr[first_string + 1]
end

p longest_consec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1)


this isn't just for pairs!!!:

