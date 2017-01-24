function splice(array, startIndex, number) {
  var removedValues = [];
  for (var i = startIndex; i < array.length; i++) {
    if (i < startIndex + number) {
      push(removedValues, array[i]);
    }
    array[i] = array[i + number];
  }

  array.length = array.length - number;
  return removedValues;
}


function push(array, value) {
  array[array.length] = value;
  return array.length;
}

var count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));
console.log(count);
