function firstNOf(arr, count) {
  return arr.slice(0, count);
}

var digits = [4, 8, 15, 16, 23, 42];
console.log(firstNOf(digits, 3)); 



/*
function firstNOf(arr, count) {
  var newArray = [];
  for (var i = 0; i < count; i++) {
    newArray[i] = arr[i];
  }
  return newArray;
}
*/
