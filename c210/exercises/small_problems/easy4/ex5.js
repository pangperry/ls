//input: 2 two arrays
//output: a single array, with all items (order alternating from one array to the other)
//
//assume arrays are the same lengtha and non-empty
//for clarity, set parameter values to even and odd 
//create a newArray;
//iterate from 0 to even.length - 1 (for loop)
//in each iteration: 
//newArray.push(even[i]);
//newArray.push(odd[i]);
//
//after loop, return newArray;
//
//
function interleave(even, odd) {
  var newArray = [];
  for (var i = 0; i < even.length; i++) {
    newArray.push(even[i], odd[i]);
  }
  return newArray;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c'])); // [1, 'a', 2, 'b', 3, 'c']

