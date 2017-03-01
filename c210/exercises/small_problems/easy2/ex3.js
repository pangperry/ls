//input: a positive integer
//output: string of alternating 1s and 0s, starting with 1
//create a string var, result
//iterate from 1 to number
//at each iteration, if i is odd, result +  '0'
//if i is even, result +  '1'
//return result
//
//rules: if index even, return 0, else return 1;
//odd: i % 2 === 0; + '1'
//even: i % 1 === 1; + '0';
function stringy(number) {
  var result = '';
  for (var i = 1; i <= number; i++) {
     result += i % 2 === 0 ? '0' : '1';
  }

  return result;
}

console.log(stringy(6)); // '101010'
console.log(stringy(9)); // '101010101'
console.log(stringy(4)); // '1010'
console.log(stringy(7)); // '1010101'
