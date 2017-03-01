//input: number
//output: number
//--if number positive, return negative version of the number
//--if number is negative, return the number
//
//algo:
//if number is => 0, 
//return -1 * number
//else return number
//
function negative(number) {
  if (number >= 0) {
    return -1 * number;
  } else {
    return number;
  }
}
/* using Math.abs()------>
function negative(number) {
  return Math.abs(number) * -1;
}
*/
console.log(negative(5));  // -5
console.log(negative(-3)); // -3
console.log(negative(0));  // -0
