//input: string (or 1 or more white-space separated words)
//output: string (with same words, but words over 5 chars reversed)
//
//set newString = string.split
//return mapped string where return value is word, or word-reversed if word
//if longer than 5
//
//algo:
//
//split string and set equal to newString;
//return the result of:
//  map through newString
//  if word.length >= 5, return word.split.reverse.join
//  else return word
//

function reverseWords(string) {
  var newString = string.split(' ');
  return newString.map(reverse).join(' ');
}

function reverse(word) {
  if (word.length >= 5) {
    return word.split('').reverse().join('');
  } else {
    return word;
  }
}



console.log(reverseWords('Professional'));          // lanoisseforP
console.log(reverseWords('Walk around the block')); // Walk dnuora the kcolb
console.log(reverseWords('Launch School'));         // hcnuaL loohcS

