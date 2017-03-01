//input: array, search item
//output: index where search item found or -1
function binarySearch(list, item) {
  var half;
  var start = 0;
  var end = list.length - 1;

  while (start <= end) {
    half = start + Math.floor((end - start) / 2);
    if (item === list[half]) {
      return half;
    } else if (item < list[half]) {
      end = half - 1;
    } else if (item > list[half]) {
      start = half + 1;
    }
  }

  return -1
}

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));                                // 7
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter')); // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler')); // 62
