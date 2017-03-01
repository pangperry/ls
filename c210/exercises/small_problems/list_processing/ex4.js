//input: array of numbers
//output: number, the sum of the sums of each leading subsequence for that array

//reduce the array, but instead of adding the item at each iteration,
//add the reduce value of an array comprised of the values from index 0
//to(inclusive) the value at the index of the current iteration

function sumOfSums(array) {
  return array.reduce(function(accum, item, index) {
    return accum + array.slice(0, index + 1).reduce(function(total, number) {
      return total + number;
    });
  });
}
console.log(sumOfSums([3, 5, 2]));       // (3) + (3 + 5) + (3 + 5 + 2) # -> (21)
console.log(sumOfSums([1, 5, 7, 3]));    // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) # -> (36)
console.log(sumOfSums([4]));             // 4
console.log(sumOfSums([1, 2, 3, 4, 5])); // 35
