function totalSquareArea(rectangles) {
  var squares = rectangles.filter(function(rectangle) {
    return rectangle[0] === rectangle[1];
  });

  var areas = squares.map(function(rectangle) {
    return rectangle[0] * rectangle[1];
  });

  return areas.reduce(function(sum, area) {
    return sum + area;
  });
}

var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalSquareArea(rectangles)); // 121
