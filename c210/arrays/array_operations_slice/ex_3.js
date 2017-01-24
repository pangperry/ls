/*
function concat(firstArray, secondArray) {
  var newArray = [];
  for (var i = 0; i < firstArray.length; i++) {
    push(newArray, firstArray[i]);
  }

  for (var i = 0; i < secondArray.length; i++) {
    push(newArray, secondArray[i]);
  }

  return newArray;
}
*/
function concat(array1, array2) {
  var newArray = array1; 
  for (var i = 0; i < array2.length; i ++) {
    push(newArray, array2[i]);
  }

  return newArray;
}

function push(array, value) {
  array[array.length] = value;
  return array.length;
}

console.log(concat([1, 2, 3], [4, 5, 6]));
