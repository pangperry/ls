//first draft do a normal transpose, then check if using unshift instead of push will get it done
//
//input: matrix -- array of arrays
//output: a transposed matric
//
//set transposed = [];
//get the number of rows in the tranposed array and push that many
//empty arrays onto transposed
//
//set up two nested loops:
//outer row
//inner column
//at each iteration, tranpose[column][row].push(matrix[row][column]
//
//

function rotate90(matrix) {
  var transposed = [];
  var newRowsCount = matrix[0].length

  for (var row = 0; row < newRowsCount; row++) {
    transposed.push([]);
  }

  for (var row = 0, rows = matrix.length; row < rows; row++) {
    for (var col = 0, cols = matrix[row].length; col < cols; col++) {
      transposed[col].unshift(matrix[row][col]);
    }
  }

  return transposed;
}

var matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

  var matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8]
];

var newMatrix1 = rotate90(matrix1);
var newMatrix2 = rotate90(matrix2);
var newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));
console.log(newMatrix1); // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2); // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3); //matrix2



