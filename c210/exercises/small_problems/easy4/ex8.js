//input: pos integer
//outpu: list(an array) of the digits in the integer
//
//turn number to string
//split string to array
//map array so it holds numbers, not strings
//return array

function digitList(number) {
  return number.toString().split('').map(Number);
}
console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]

