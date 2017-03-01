//input: string with letters and other chars
//output: boolean, returns true only if the letters are all uppercase
//
//strippedString = remove non-letter chars from string
//return strippedString === stringString.toUpperCase()
//
//
//algo:
//strippedString =  string.replace(/[^a-z]/ig, '')
//return strippedString === strippedString.toUpperCase();
function isUppercase(string) {
  return !string.match(/[a-z]/);
}

/*
function isUppercase(string) {
  var strippedString = string.replace(/[^a-z]/ig, '');
  return strippedString === strippedString.toUpperCase();
}
*/

console.log(isUppercase('t'));          // false
console.log(isUppercase('T'));          // true
console.log(isUppercase('Four Score')); // false
console.log(isUppercase('FOUR SCORE')); // true
console.log(isUppercase('4SCORE!'));    // true
console.log(isUppercase(''));           // true
