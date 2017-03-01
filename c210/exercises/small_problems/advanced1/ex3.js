function transpose(matrix) {
  var transposed = [];
  var newRowsCount = matrix[0].length;

  for (var row = 0; row < newRowsCount; row++) {
    transposed.push([]);
  }

  for (var row = 0, rows = matrix.length; row < rows; row++) {
    for (var col = 0, cols = matrix[row].length; col < cols; col++) {
      transposed[col].push(matrix[row][col]);
    }
  }

  return transposed;;
}

console.log(transpose([[1, 2, 3, 4]]));       // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]])); // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                // [[1]]
console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]

