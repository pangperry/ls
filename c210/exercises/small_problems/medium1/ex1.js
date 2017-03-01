//input: an array
//output: a new array, which is a copy of the input array, but the first element is moved to the end
//
//note: don't mutate the orginal array
//if input not array, return undefined
//if input empty [], return []
//
//check input, if not array, return undefined
//if empty array, return []
//else
//return array.slice(1).concat(array[0];
//

function rotateArray(input) {
  if (!Array.isArray(input)) {
    return undefined;
  } 

  if (input === []) {
    return [];
  }

  return input.slice(1).concat(input[0]);
}


console.log(rotateArray([1,2,3,4,5])); //[2,3,4,5,1]

console.log(rotateArray([7, 3, 5, 2, 9, 1]));   // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));      // ['b', 'c', 'a']
console.log(rotateArray(['a']));                // ['a']
console.log(rotateArray([1, 'a', 3, 'c']));    // [ 'a', 3, 'c', 1 ]
console.log(rotateArray([{a: 2}, [1, 2], 3])); // [ [1, 2], 3, {a: 2} ]
console.log(rotateArray([]));                   // []

// return undefined if the argument is not an array
console.log(rotateArray());                    // undefined
console.log(rotateArray(1));                   // undefined
//
//
// // the input array is not mutated
x = [1, 2, 3, 4]
rotateArray(x)                  // [2, 3, 4, 1]
console.log(x)                  // [1, 2, 3, 4]
