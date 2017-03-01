//input: array (of numbers);
//out: array (of running total from those numbers)
//
//map the array with (item, index)
//each iteration return array.slice(0,index + 1).reduce(sum)
//create sum function

/*
function runningTotal(numbers) {
  return numbers.map(function(item, index) {
    return numbers.slice(0, index + 1).reduce(sum);
  });

  function sum(total, number) {
    return total + number;
  }
}
*/

//more efficiently:
function runningTotal(numbers) {
  var total = 0;
  return numbers.map(function(item) {
    return total += item;
  });

}



console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []



