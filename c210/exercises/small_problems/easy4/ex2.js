//input: two arrays
//output: one array
//
//take two arrays, combine them and return the union--no duplicate items in the new array
//
//combine arrays
//sort array
//filter array, only items that don't equal the next item
//return the new array
//

function union(array1, array2) {
  var newArray = array1.concat(array2);
  newArray.sort(comparison);
  return newArray.filter(function(item, index) {
    if (item !== newArray[index + 1]) {
      return item;
    }
  });
}

function comparison(a,b) {
  return a - b;
}

console.log(union([1,3,5], [3,6,9]));
