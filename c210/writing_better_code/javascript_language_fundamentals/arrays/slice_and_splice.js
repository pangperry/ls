function slice(array, begin, end) {
  var result = [];

  begin = begin > array.length ? array.length : begin;
  end = end > array.length ? array.length : end;

  for (var i = begin; i < end; i++) {
    result.push(array[i]);
  }

  return result;
}

function splice(array, start, deleteCount) {
  start = start > array.length ? array.length : start;
  deleteCount = deleteCount > (array.length - start) ? array.length - start : deleteCount;

  var arrayCopy = array.slice();
  var itemCount = Array.prototype.slice.call(arguments, 3).length;
  var newLength = array.length + itemCount - deleteCount;
  array.length = newLength;

  for (var i = 0; i < start; i++) {
    array[i] = arrayCopy[i];
  }

  for (var i = 0; i < itemCount; i++) {
    array[start + i] = arguments[3 + i]
  }

  for (var i = 0, length = arrayCopy.length - (start + deleteCount); i < length; i++) {
    array[start + itemCount + i] = arrayCopy[start + deleteCount + i]
  }

  return slice(arrayCopy, start, start + deleteCount);
}


console.log(slice([1, 2, 3], 1, 2));           // [2]
console.log(slice([1, 2, 3], 2, 0));           // []
console.log(slice([1, 2, 3], 5, 1));           // []

var arr = [1, 2, 3];
console.log(slice(arr, 1, 3));                 // [2, 3]
console.log(arr);                              // [1, 2, 3]

console.log(splice([1, 2, 3], 1, 2));                   // [2, 3]
console.log(splice([1, 2, 3], 1, 3));                   // [2, 3]
console.log(splice([1, 2, 3], 1, 0));                   // []
console.log(splice([1, 2, 3], 0, 1));                   // [1]
console.log(splice([1, 2, 3], 1, 0, 'a'));               // []

var arr = [1, 2, 3];
console.log(splice(arr, 1, 1, 'two'));                  // [2]
console.log(arr);                                       // [1, 'two', 3];

var arr = [1, 2, 3];
console.log(splice(arr, 1, 2, 'two', 'three'));          // [2 ,3]
console.log(arr);                                       // [1, "two", "three"]

var arr = [1, 2, 3];
console.log(splice(arr, 1, 0));                         // []
console.log(splice(arr, 1, 0, 'a'));                    // []
console.log(arr);                                       // [1, 'a', 2, 3]

var arr = [1, 2, 3];
console.log(splice(arr, 0, 0, 'a'));                    // []
console.log(arr);                                       // ['a', 1, 2, 3]
