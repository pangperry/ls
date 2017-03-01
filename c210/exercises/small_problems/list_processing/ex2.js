//input: a positive integer
//output: a number, the sum of the positive integers digits
//
//
//convert input number to string
//split string.reduce(must convert to number at each step)
//
function sum(integer) {
  return String(integer).split('').map(Number).reduce(function(total, num) {
    return total + num;
  });
}

console.log(sum(23)); //5
console.log(sum(496));         // 19
console.log(sum(123456789));   // 45
