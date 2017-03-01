//input: array of integers
//output: a string version of a number to 2 decimal points
//
//the number/string output is the product of numbers in array, divided by
//the length of the array, rounded to three decimal points
//
//declare result var;
//set result equal to:
// the array values reduced(product) and divided by array.length
// return String(result.toFixed(3));
function showMultiplicativeAverage(array) {
  var result = array.reduce(product) / array.length;
  return result.toFixed(3);
}

function product(total, number) {
  return total * number;
}

console.log(showMultiplicativeAverage([3, 5]));                 // '7.500'
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));  // '28361.667'
