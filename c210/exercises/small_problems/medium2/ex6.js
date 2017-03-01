//input:n
//output:  square of the sum of the first n positive integers MINUS the sum of the squares of the first n positive integers
//
// a = Math.pow(reduce(1..n),2);  reduce = sum operation
// b = ((1..n).map Math.pow(i,2)).reduce
//
// a - b
//
// return squareSum(n) - sumSquares(n)
/* better solution
function sumSquareDifference(n) {
  var sum = 0;
  var sumOfSquares = 0;

  for (var i = 1; i <= n; i++) {
    sum += i;
    sumOfSquares += Math.pow(i, 2);
  }

  return Math.pow(sum, 2) - sumOfSquares;
}
*/

function sumSquareDifference(n) {
  var integers = [];
  for (var i = 1; i <= n; i++) {
    integers.push(i);
  }
  return squareSum(integers) - sumSquares(integers);
}

function squareSum(numbers) {
  return Math.pow(numbers.reduce(sum),2); 
}

function sum(total, number) {
  return total + number;
}

function sumSquares(numbers) {
  return numbers.reduce(square);
}
function square(total,number) {
  return total + Math.pow(number, 2);
}
console.log(sumSquareDifference(3));//22
console.log(sumSquareDifference(10));//2640
console.log(sumSquareDifference(1));//0
console.log(sumSquareDifference(100));//25164150
