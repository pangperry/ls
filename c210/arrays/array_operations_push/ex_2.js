function pop(array) {
  var newLength = array.length - 1;
  var value = array[newLength];
  array.length = newLength;
  return value;
}


var numbers = [1,2,3,4,5];
console.log(pop(numbers));
console.log(numbers);
