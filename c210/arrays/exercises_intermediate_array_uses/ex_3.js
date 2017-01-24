
function mirroredArray(arr) {
    return arr.concat(arr.slice().reverse());
}

var numbers = [1, 2, 3, 4];
console.log(mirroredArray(numbers));

/*
function UpDown(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.push(array[i]);
  }
  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}

var numbers = [1, 2, 3, 4];
console.log(UpDown(numbers));
*/
