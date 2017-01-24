function totalArea(rectangles) {
  var areas = rectangles.map(function(rectangle) {
    return rectangle[0] * rectangle[1];
  });

  return areas.reduce(function(sum, area) {
    return sum + area;
  });
}

var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalArea(rectangles));

