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

  return transposed;
}

var matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

var newMatrix = transpose(matrix); 
console.log(matrix);
console.log(newMatrix);

