//input: number
//output: boolean
//
//if number equals the number read in reverse, return true
//
//var string = String(number);
//var copy = string.split('').reverse().join('');
//return string === copy;
function isPalindromicNumber(number) {
  var string = String(number);
  var copy = string.split('').reverse().join('');
  return string === copy;
}
console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true
