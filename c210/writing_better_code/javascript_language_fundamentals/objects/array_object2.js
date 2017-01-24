var myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;
function average(array) {
  var sum = 0;
  for (var i = -2; i < array.length; i++) {
    sum += array[i];
  }

  return sum / array.length;
}

average(myArray);
