function nthElementOf(arr, index) {
  return arr[index];
}

var digits = [4, 8, 15, 16, 23, 42];
console.log(digits.length);
/*
console.log(nthElementOf(digits, 3));
console.log(nthElementOf(digits, 8));
console.log(nthElementOf(digits, -1));
*/

digits[-1] = -42;
console.log(nthElementOf(digits, -1));
console.log(digits[-1]);
console.log(digits['-1']);
console.log(digits.length);
console.log(digits);
