//input: 2 integers, number and n, the number of digits to be rotated. 
//ouput: the first integer, but with the last n numbers rotated
//
//
//convert the number to string
//split the string to array
//break the array into two parts:
//    start = a part that won't be rotated
//    end = part that is rotated (rotate this part)
// return start.concat(end)).join('');
//
//rules for rotate:
//return array.slice(1) + array[0];

function rotateRightmostDigits(number, n) {
  var digits = String(number).split('');
  var start = digits.slice(0, -n);
  var end = rotate(digits.slice(-n));
  return parseInt(start.concat(end).join(''), 10);

}


function rotate(array) {
  return array.slice(1).concat(array[0]);
}

console.log(rotateRightmostDigits(735291, 1)); // 735291
console.log(rotateRightmostDigits(735291, 2)); // 735219
console.log(rotateRightmostDigits(735291, 3)); // 735912
console.log(rotateRightmostDigits(735291, 4)); // 732915
console.log(rotateRightmostDigits(735291, 5)); // 752913
console.log(rotateRightmostDigits(735291, 6)); // 352917
