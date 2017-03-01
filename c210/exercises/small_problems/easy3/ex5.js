//input: string
//output: boolean
//
//check if cleaned string and reverse string are equal
//
//to clean string, replace all [^a-z0-9] with ''.
//case-insensitive, so after replacement, convert string to upperCase()
//before passing it to isPalindrome
//
//


function isRealPalindrome(string) {
  var cleanString = string.replace(/[^a-z0-9]/ig, '').toUpperCase();
  

  return isPalindrome(cleanString);
}
function isPalindrome(string) {
  return string ===  string.split('').reverse().join('');
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome('Madam, I\'m Adam'));    // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false

