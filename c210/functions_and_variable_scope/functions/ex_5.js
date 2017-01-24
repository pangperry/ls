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

temperatures = [56, 58, 60, 62, 54];
console.log(average(temperatures));
