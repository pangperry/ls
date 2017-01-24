var numbers = [1, 2, 3, 4, 5];

function reverseArray(items) {
  var reversed = [];

  for (var i = items.length - 1; i >= 0; i--) {
    reversed.push(items[i]);
  }

  return reversed;
}

console.log(reverseArray(numbers));
