function oddElementsOf(arr) {
  var newArray = [];
  for (var i = 1; i < arr.length; i += 2) {
  newArray.push(arr[i]);
  }
  return newArray;
}

var digits = [4, 8, 15, 16, 23, 42];
console.log(oddElementsOf(digits));
