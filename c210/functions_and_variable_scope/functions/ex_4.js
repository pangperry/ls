function average(myArray) {
  return sum(myArray) / myArray.length; 
}

function sum(values) {
  var total = 0;
  for (var i = 0, length = values.length; i < length; i++) {
    total += values[i];
  }
    return total;
}

console.log(average([4, 5, 6]));
