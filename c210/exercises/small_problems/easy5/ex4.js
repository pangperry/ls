//input: non-empty string
//output: string of 1 or 2 chars
//
//check string length
//if even (and greater than 1), return the center two characters
//if odd, return the center character
//if length is 1, return the character
//
//algo:
//get length of string
//if length is 1,
//return the string
//if length is > 1,
//set middle to Math.floor(length /2)
//if length is even,
//return string[middle - 1] + string[middle];
//if length is odd,
//return string[middle];


function centerOf(string) {
  if (string.length % 2 === 1) {
    return string[Math.floor(string.length / 2)];
  } else {
    return string.substr(string.length / 2 - 1, 2);
  }
}
console.log(centerOf('I love ruby'));    // 'e'
console.log(centerOf('Launch School'));  // ' '
console.log(centerOf('Launch'));         // 'un'
console.log(centerOf('Launchschool'));  // 'hs'
console.log(centerOf('x'));              // 'x'

