/*
split the text
transform array(map), 
      if not letter, return it,
      if letter, use key to get new letter

rules for getting new letter.
get index of current letter
(index of current letter + key) % 26 is new index
check if original letter is upcase or downcase and return appropriately the new  letter
join the string
*/
var LETTERS = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function caesarEncrypt(string, key) {
  string = string.split('');
  var pattern;
  return string.map(function(chr) {
    pattern = new RegExp(/[^a-z]/,'ig');
    if (pattern.test(chr)) {
      return chr;
    } else {
      return encryptChar(chr, key);
    }
  }).join('');
}

function encryptChar(string, key) {
  var index = LETTERS.indexOf(string.toLowerCase());
  var newIndex = (index + key < 26) ? (index + key) : (index + key) % 26;
  if (string === string.toUpperCase()) {
    return LETTERS[newIndex].toUpperCase();
  } else {
    return LETTERS[newIndex];
  }
}
// Simple shift
console.log(caesarEncrypt('A', 0));       // 'A'
console.log(caesarEncrypt('A', 3));       // 'D'

// // Wrap around
console.log(caesarEncrypt('y', 5));       // 'd'
console.log(caesarEncrypt('a', 47));      // 'v'

// // All letters
console.log(caesarEncrypt('ABCDEFGHIJKLMONPQRSTUVWXYZ', 25));
// // ZABCDEFGHIJKLNMOPQRSTUVWXY
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// // Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!

// // Many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// // Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?
