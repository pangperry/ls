
function bubbleSort(array) {
  var swapped;
  var a;
  var b;

  do {
    swapped = [];

    for (var i = 0; i < array.length - 1; i++) {
      if (compare(array[i], array[i + 1]) === 1) {
        a = array[i];
        b = array[i + 1];
        array[i] = b;
        array[i + 1] = a;
        swapped.push(true);
      }
    }
  } while (swapped.includes(true));

  return array;
}

function compare(a, b) {
  if (a > b) {
    return 1;
  } else if (b > a) {
    return -1;
  }
}

var array = [5, 3];
bubbleSort(array);
console.log(array);     // [3, 5]
array = [6, 2, 7, 1, 4];
bubbleSort(array);
console.log(array);     // [1, 2, 4, 6, 7]

array = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array);
console.log(array);     // ['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler']
