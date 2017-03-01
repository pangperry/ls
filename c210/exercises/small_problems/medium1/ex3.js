//input: a number
//output: the same number, after having rotated left for each place(i.e., rotate left for length places, for length - 1 places  etc

function maxRotation(number) {
  for (var i = 0; i < String(number).length; i++) {
    number = rotateRightmostDigits(number, String(number).length - i); 
  }

  return number;
}

function rotateRightmostDigits(number, n) {
  var digits = String(number).split('');
  var start = digits.slice(0, -n);
  var end = rotate(digits.slice(-n));
  return parseInt(start.concat(end).join(''), 10);
}

function rotate(array) {
  return array.slice(1).concat(array[0]);
}

console.log(maxRotation(1234)); //
console.log(maxRotation(735291));        // 321579
console.log(maxRotation(3));             // 3
console.log(maxRotation(35));            // 53
console.log(maxRotation(105));           // 15 # the leading zero gets dropped
console.log(maxRotation(8703529146));    // 7321609845

