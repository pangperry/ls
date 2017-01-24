function shift(array) {
  var firstValue = array[0];
  for (var i = 0; i < array.length; i++) {
    array[i] = array[i + 1];
  }

  array.length = array.length - 1;
  return firstValue;
}

var count = [1, 2, 3];
console.log(count);
console.log(shift(count));
console.log(count);

