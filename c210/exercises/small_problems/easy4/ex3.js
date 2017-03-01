//input: an array
//output: an array of two arrays
//
//function takes array, and returns a new array which contains two arrays, the first
//holds the first half of the orginal arrays elements, and the second holds the rest
//if odd, the first array gets the extra item (e.g., 5 -- > 3,2
//if an empty array is passed, return an array of two empty arrays;
//
//get halfLength using Math.floor(array.length / 2)
//use map to transform the array into two arrays using
//create array1 and array2
//iterate from 0 to halfLength(inclusive), push array items onto array 1
//iterate from halfLength to end of array, push onto array2
//return array1.concat(array2);
//

function halvsies(array) {
  var halfLength = Math.ceil(array.length / 2);
  var array1 = array.slice(0, halfLength); 
  var array2 = array.slice(halfLength, -1);
  
  return [array1, array2,];
}
console.log(halvsies([1, 2, 3, 4]));    // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3])); // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));             // [[5], []]
console.log(halvsies([]));              // [[], []]
