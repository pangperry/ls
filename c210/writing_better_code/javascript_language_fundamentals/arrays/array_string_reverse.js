function reverse(inputForReversal) {
  if (Array.isArray(inputForReversal)) {
    return reverseArray(inputForReversal);
  } else {
    return reverseString(inputForReversal);
  }
}

function reverseArray(inputForReversal) {
  var reversed = [];
  for (var i = 0, length = inputForReversal.length; i < length; i++) {
    reversed[length - 1 - i] = inputForReversal[i];
  }

  return reversed;
}

function reverseString(inputForReversal) {
  stringArray = inputForReversal.split('');
  return reverseArray(stringArray).join('');
}

console.log(reverse('Hello'));          // olleH
console.log(reverse('a'));               // a
console.log(reverse([1, 2, 3, 4]));     // [4, 3, 2, 1]
console.log(reverse([]));               // []
