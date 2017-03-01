function sequence(int) {
  var result = [];
  for (var i = 0; i <= int; i++) {
    result.push(i);
  }

  return result;
}

console.log(sequence(5)); // [1, 2, 3, 4, 5]
console.log(sequence(3)); // [1, 2, 3]
console.log(sequence(1)); // [1]
