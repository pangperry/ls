//input: a number
//output: a number
//
//given a number, compute the sum of all the numbers
//,that are multiples of 3 or  5, that are between 1
//and that number(inclusive)
//
//declare newArray
//iterate from 1 to number
//for each iteration check if it is a multiple
//if multiple push onto newArray
//reduce the newArray values and return
//
//rules for multiple:
//if (number % 3 == 0 && (number % 5 === 0)
//

function multisum(number) {
  var newArray = [];

  for (var i = 1; i <= number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      newArray.push(i);
    }
  }

  return newArray.reduce(function(sum, number) {
    return sum + number;
  });
}

console.log(multisum(3));
console.log(multisum(5));
console.log(multisum(10));
console.log(multisum(1000));
