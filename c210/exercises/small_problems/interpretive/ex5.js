var LETTERS = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
/*
input: text, and string-keyword;
output: text(with punctuation and case retained)


make longer keyword array--repeat keyword string enough times so it's as long/longer than the text AND SPLIT IT
text-split it
transform(map) text
if (!letter), return letter
if letter, LETTERS[keyWord.shift()]);
*/

function vigenereCipher(string, keyWord) {
  string = string.split('');
  keyWord = keyWord.repeat(string.length / keyWord.length).split('');
  var pattern = new RegExp(/[^a-z]/,'ig');

  return string.map(function(chr) {
    if (pattern.test(chr)) {
      return chr;
    } else {
      return encryptChar(chr, LETTERS.indexOf(keyWord.shift()));
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

console.log(vigenereCipher("Pineapples don't go on pizzas!", "meat"));
