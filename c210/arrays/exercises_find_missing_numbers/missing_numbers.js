function missing(arr) {
  var result = [];
  var lowest = arr[0];
  var highest = arr[arr.length - 1];

  for (var integer = lowest; integer < highest; integer++) {
    if (arr.indexOf(integer) < 0) {
      result.push(integer);
    }
  }

  return result;
}

console.log(missing([-3, -2, 1, 5]));                 
