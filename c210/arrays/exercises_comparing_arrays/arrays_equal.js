function arraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (var i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
}


console.log(arraysEqual([1], [1]));
console.log(arraysEqual([1], [2]));
console.log(arraysEqual([1, 2], [1, 2, 3]));
console.log(arraysEqual([1, 'hi', true], [1, 'hi', true]));
console.log(arraysEqual([1, 'hi', true], [1, 'hi', false]));
console.log(arraysEqual([1, 'hi', true], [1, 'hello', true]));
console.log(arraysEqual([1, 'hi', true], [2, 'hi', true]));
