var items = [1, 'a', 4];

function arrayToString(array) {
  convertedArray = '';
  for (var i = 0; i < array.length; i++) {
    convertedArray += String(array[i]);
  }

  return convertedArray;
}

console.log(arrayToString(items));
