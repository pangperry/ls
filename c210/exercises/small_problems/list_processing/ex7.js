//input: a string
//output: list of all substrings that are palindromes
//
//create a list of all substrings
//iterate through list of substrings, selecting those
//that are palindromes according to the rules
//
//palindrome general rules:
//  must be >= 2 characters
//  case-sensitive
//  includes any type of character
//
//algo:
//substring function:
//create results array
//split string and iterate using forEach(letter, outteridx)
//--iterate splitstring again, using char and innerindex
//--at each iteration, push original string.substr(outteridx, innderidx + 1)
//
//palindromes function:
//filter the substrings lists to keep words that are palindomes
//
//palindrome function:
//check if string.length >= 2
//check if string === string.split('').reverse().join('');
//
//return result of palindromes function

function palindromes(string) {
  return substrings(string).filter(isPalindrome);;
}

function isPalindrome(word) {
  return word.length > 1 && word.split('').reverse().join('') === word;
}

function substrings(string) {
  var results = [];
  
  string.split('').forEach(function(letter, outterIdx) {
    string.split('').forEach(function(letter, innerIdx) {
      results.push(string.substr(outterIdx, innerIdx + 1));
    });
  });

  return results;
}

console.log(palindromes('madam')); // ['madam'];
console.log(palindromes('madaM')); // [];
console.log(palindromes('ma-am')); // ['ma-am'];
console.log(palindromes('madam')); // ['madam'];
console.log(palindromes('m')); // []'
console.log(palindromes('hello-madam-did-madam-goodbye'));


