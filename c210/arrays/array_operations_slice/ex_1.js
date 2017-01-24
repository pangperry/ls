function slice(array, startIndex, endIndex) {
  var newArray = [];
  for (var i = startIndex; i < endIndex; i++) {
    newArray[i] = array[i]; /* use push */
  }

  return newArray;
}

console.log(slice([1, 2, 3, 4, 5], 0, 2));
console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));


