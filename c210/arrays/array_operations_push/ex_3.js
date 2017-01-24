function unshift(array, value) {
  for (var i = array.length; i > 0; i--) {
    array[i] = array[i - 1];
  }

  array[0] = value;
  return array.length;
}

var numbers = [1,2,3,4,5];
var item = 'johnny';

console.log(numbers);
console.log(unshift(numbers, item));
console.log(numbers);
