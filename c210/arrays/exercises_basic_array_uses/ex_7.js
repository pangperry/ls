function lastNOf(arr, count) {
  var start = arr.length - count;

  if (start < 0 ) {
    index = 0;
  }

  return arr.slice(start);
}

var digits = [4, 8, 15, 16, 23, 42];
console.log(lastNOf(digits, 3));


/*
function lastNOf(arr, count) {
  var newArray = [];
  var newArrayIndex = 0;
  for (var i = arr.length - count; i < arr.length; i++) {
    newArray[newArrayIndex] = arr[i];
    newArrayIndex++;
  }

  return newArray;
}
var digits = [4, 8, 15, 16, 23, 42];
console.log(lastNOf(digits, 3)); // Returns [16, 23, 42]
*/
