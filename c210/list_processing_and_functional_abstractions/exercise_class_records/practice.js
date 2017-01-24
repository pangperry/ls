var grades = [[90, 95, 100, 80], [50, 70, 90, 100], [88, 87, 88, 89], [100, 100, 100, 100], [50, 80, 60, 90]];

function transpose(array) {
  return array[0].map(function(col, columnIdx) {
    return array.map(function(row) {
      return row[columnIdx];
    });
  });
}
console.log(transpose(grades));



