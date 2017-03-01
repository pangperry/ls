//input: string
//output: string, same as the input string, but consonants are doubled

//set newString to split string
//
//to map of resulting array
//  if consonant, regexObj.test(str), return item twice, else once
//join and return array
//

function doubleConsonants(string) {
  return string.split('').map(consonantDoubler).join('');
}

function consonantDoubler(char) {
  if (/[^\W_0-9aeiou]/i.test(char)) {
    return char + char;
  } else {
    return char;
  }
}
console.log(doubleConsonants('String'));       // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!')); // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));     // "JJullyy 4tthh"
console.log(doubleConsonants(''));             // ""
