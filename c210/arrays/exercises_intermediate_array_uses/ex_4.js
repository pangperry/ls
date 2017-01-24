function joinArray(arr, joiner) {
  var joinedArray = arr[0].toString();
  joiner = joiner || '';
  for (var i = 1; i < arr.length; i++) {
    joinedArray += joiner + arr[i].toString();
  }

  return joinedArray;
}

/*
function joinArray(arr, joiner) {
  joiner  = joiner || '';
  return arr.join(joiner);
}
*/
console.log(joinArray(['a', 'b', 'c'], '+')); 
console.log(joinArray([1, 4, 1, 5, 9, 2, 7]));
