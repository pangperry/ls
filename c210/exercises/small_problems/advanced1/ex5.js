//input: two sorted lists
//output: combined sorted lists, 
    // but cannot sort the combined list, 
    // must add each item in order + cannot mutate origal arrays
    //
  //set newArray =[]
  //make copies of both arrays
  //until both arrays empty
  //compare first two items of both arrays
  //pop off the smallest and push it onto the newArray
  //if both are empty, return newArray
  //if only one is empty, concantenate it to newArray and return new array

function merge(array1, array2) {
  var copy1 = array1.slice();
  var copy2 = array2.slice();
  var newArray = [];

  while (copy1.length > 0 && copy2.length > 0) {
    if (copy1[0] >= copy2[0]) {
      newArray.push(copy2.shift());
    } else {
      newArray.push(copy1.shift());
    }
  }

  return newArray.concat(copy1.length === 0 ? copy2 : copy1);
}

console.log(merge([1, 5, 9], [2, 6, 8])); // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));    // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));        // [1, 4, 5]
console.log(merge([1, 4, 5], []));        // [1, 4, 5]
