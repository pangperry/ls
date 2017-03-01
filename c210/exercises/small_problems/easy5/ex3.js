//input: number
//output: number (reverse of input number)
//
//convert number to string
//split string to array
//reverse array
//join array
//convert to number--use parseInt to deal with zeros
//return


function reversedNumber(num) {
  var digits = String(num).split('').reverse();
  return parseInt(digits.join(''), 10);
}
console.log(reversedNumber(12345)); // 54321
console.log(reversedNumber(12213)); // 31221
console.log(reversedNumber(456));   // 654
console.log(reversedNumber(12000)); // 21 # Note that zeros get dropped!
console.log(reversedNumber(1));     // 1
