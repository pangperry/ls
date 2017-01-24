function indexOf(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }

  return -1;
}

console.log(indexOf([1, 2, 3, 3], 3));
console.log(indexOf([1, 2, 3], 4));
