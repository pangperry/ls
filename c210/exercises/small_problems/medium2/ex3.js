//input: three numbers(angles)
//output: 'acute', 'right', 'obtuse', or 'invalid'
function triangle(angle1, angle2, angle3) {
  if (!isValid(angle1, angle2, angle3)) {
    return 'invalid';
  } else if (isRight(angle1, angle2, angle3)) {
    return 'right';
  } else if (isAcute(angle1, angle2, angle3)) {
    return 'acute';
  } else if (isObtuse(angle1, angle2, angle3)) {
    return 'obtuse';
  } else {
    return 'invalid';
  }
}

function isObtuse(angle1, angle2, angle3) {
  return angle1 > 90 || angle2 > 90 || angle3 > 90;
}

function isAcute(angle1, angle2, angle3) {
  return angle1 < 90 && angle2 < 90 && angle3 < 90;
}

function isRight(angle1, angle2, angle3) {
  return angle1 === 90 || angle2 === 90 || angle3 === 90;
}

function isValid(angle1, angle2, angle3) {
  return angle1 + angle2 + angle3 === 180 && angle1 > 0 && 
    angle2 > 0 && angle3 > 0;
}

console.log(triangle(60, 70, 50)); //acute
console.log(triangle(30, 90, 60)); //right
console.log(triangle(120, 50, 10)); //obtuse
console.log(triangle(0, 90, 90)); //invalid
console.log(triangle(50, 50, 50)); //invalid
