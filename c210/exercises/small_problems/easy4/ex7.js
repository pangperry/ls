//input: 2 arrays of with numbers (both same length
//output: a single array cotain
//questions: how to deal with unequal array lengths?
//           how to deal with empty arrays?
//           completely empty input
//
//assuming everything is nice:
//
//map through first array with item and index
//return array1[i] * array2[i]
//return the resulting array
//

function multiplyList(array1, array2) {
  return array1.map(function(number, index) {
           return array1[index] * array2[index];
  });
}
console.log(multiplyList([3, 5, 7], [9, 10, 11])); // [27, 50, 77]
