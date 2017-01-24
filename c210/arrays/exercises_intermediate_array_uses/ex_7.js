function uniqueElements(arr) {
  var uniques = [];

  for (var i = 0, len = arr.length; i < len; i++) {
    if (uniques.indexOf(arr[i]) === -1) {
      uniques.push(arr[i]);
    }
  }
  
  return uniques;
}

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4])); // Returns [1, 2, 4, 3, 5]


