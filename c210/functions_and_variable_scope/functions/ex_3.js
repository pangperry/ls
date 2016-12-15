function average(myArray) {
  var total = 0;
  for (var i = 0, length = myArray.length; i < length; i++) {
    total += myArray[i];
  }
  return  total / length;
}

console.log(average([4, 5, 6]));
