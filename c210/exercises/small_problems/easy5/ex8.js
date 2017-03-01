//input: 2 integers (count, 1st number) 
//output: array of numbers
//
// take the count and the 1st number, create an array
// that is count numbers long and is made up of
// the sequential multiples of the first number
// create and array. 
// use for loop to push 1 to count onto array
// return mapped array, with each number * firstNumber

function sequence(count, firstNumber) {
  var numbers = [];

  for (var i = 1; i <= count; i++) {
    numbers.push(firstNumber * i);
  }

  return numbers;
}

console.log(sequence(0, 1000000)); // []
console.log(sequence(3, 0));     // [0, 0, 0]
console.log(sequence(5, 1)); // [1, 2, 3, 4, 5]
console.log(sequence(5, 2)); // [2, 4, 6, 8, 10]
console.log(sequence(5, 1));       // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));      // [-7, -14, -21, -28]
