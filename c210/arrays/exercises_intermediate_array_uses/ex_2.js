function combinedArray(even, odd) {
  var combinedArray = [];

  for (var i = 0; i < even.length; i++) {
    combinedArray.push(even[i]);
    combinedArray.push(odd[i]);
  }
  return combinedArray;
}


var digits = [4, 8, 15, 16, 23, 42];
var letters = ['A', 'L', 'V', 'A', 'R', 'H'];

console.log(combinedArray(digits, letters));
