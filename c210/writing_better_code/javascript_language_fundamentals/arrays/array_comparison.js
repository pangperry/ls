function areArraysEqual(array1, array2) {
  var array1Copy = array1.slice();
  var array2Copy = array2.slice();
  var i;

  if (array1.length !== array2.length) {
    return false;
  }

  array1Copy.sort();
  array2Copy.sort();
  
  for (i = 0; i < array1.length; i++) {
    if (array1Copy[i] !== array2Copy[i]) {
      return false;
    }
  }
  return true;
}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3]));                  // true
console.log(areArraysEqual([1, 2, 3], [3, 2, 1]));                  // true
console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']));      // true
console.log(areArraysEqual(['1', 2, 3], [1, 2, 3]));                // false
console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]));            // true
console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]));            // false
console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]));            // false
