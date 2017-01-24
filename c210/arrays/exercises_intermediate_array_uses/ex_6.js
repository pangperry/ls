function matrixSums(arr) {
  var newArray = [];
  for (var i = 0; i < arr.length; i++) {
    newArray[i] = arr[i].reduce(function(a,b) {
      return a + b;
    }, 0);
  }
  return newArray;
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]])); // Returns [15, 60, 12]
