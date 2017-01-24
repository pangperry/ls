function concat(array) {
  var newArray = [];
  for (var i = 0, length = array.length; i < length; i++) {
    newArray[i] = array[i];
  }

  for (var i = 1, outLength = arguments.length; i < outLength; i++) {
    if (Array.isArray(arguments[i])) {
      for (var j = 0, inLength = arguments[i].length; j < inLength; j++) {
        newArray[newArray.length] = arguments[i][j];
      }
    } else {
      newArray[newArray.length] = arguments[i];
    }
  }

  return newArray;
}
console.log(concat([1, 2 ,3], [4, 5, 6], [7, 8, 9]));
//console.log(concat([1, 2], "a", ["one", "two"]));
//console.log(concat([1, 2], ["three"], 4));
