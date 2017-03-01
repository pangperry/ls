//input: three numbers (sides of triangles)
//output: 'equilateral', 'isosceles', 'scalene', or 'invalid'
//
//check if valid valid triangle:
//  if not valid, return invalid
//if valid triangle, check if equilateral
//  if equlateral, return 'equilateral'
//  else if isoosceles, return 'isosceles'
//  else if scalene, return 'scalene'
//  else return invalid
//
//rules for triangle validity
//  To be a valid triangle, the sum of the lengths of 
//  the two shortest sides must be greater than the 
//  length of the longest side, and all sides must have 
//  lengths greater than 0. If either of these conditions 
//  are not satisfied, the triangle is invalid.
//rules for equilateral:
//  all three sides have same length;
//rules for 'isosceles:
//  only two sides are equal
//rules for 'scalene'
//  non of the sides are equal
//
//algo:
//var sides = [side1, side2, side3].sort(ascending)
//check triangle validity: check side1 + side2 > side 3
// && sides[0] > 0, sides[1] > 0, sides[2] > 0
// if not valid, return 'invalid'
//check equilateral,
//  if sides[0] === sides[1] && sides[1]=== sides[2]
//  return equilateral
//check isosceles
//  if side[0] === side[1] && side[1] !== side[2]
//  or side[0] === side[2] && side[1] !=== side[0]
//  or side[2] === side[2] && side[2] !== side[0]
//  return isosceles
//check scalene
//  if sides[0] !== side[1] and side[1] == sides[2]
//  return 'scalene'
function triangle(side1, side2, side3) {
  var sides = [side1, side2, side3].sort(function(a, b) {
    return a - b;
  });

  if (!isValid(sides)) {
    return 'invalid';
  } else if (isEquilateral(sides)) {
    return 'equilateral';
  } else if (isIsosceles(sides)) {
    return 'isosceles';
  } else if (isScalene(sides)) {
    return 'scalene';
  } else {
    return 'invalid'
  }
}

function isValid(sides) {
  return sides[0] + sides[1] > sides[2] &&
    sides[0] > 0 && sides[1] > 0 && sides[2] >> 0;
}

function isEquilateral(sides) {
  return sides[0] === sides[1] && sides[1] === sides[2];
}

function isIsosceles(sides) {
  return sides[0] === sides[1] && sides[1] !== sides[2] ||
    sides[0] === sides[2] && sides[1] !== sides[0] ||
    sides[2] === sides[1] && sides[2] !== sides[0];
}

function isScalene(sides) {
  return sides[0] !== sides[1] && sides[1] !== sides[2];
}

console.log(triangle(3, 3, 3));   // equilateral
console.log(triangle(3, 3, 1.5)); // isosceles
console.log(triangle(3, 4, 5));   // scalene
console.log(triangle(0, 3, 3));   // invalid
console.log(triangle(3, 1, 1));   // invalid

