function merge(array1, array2) {
  var copy1 = array1.slice();
  var copy2 = array2.slice();
  var newArray = [];

  while (copy1.length > 0 && copy2.length > 0) {
    if (copy1[0] >= copy2[0]) {
      newArray.push(copy2.shift());
    } else {
      newArray.push(copy1.shift());
    }
  }

  return newArray.concat(copy1.length === 0 ? copy2 : copy1);
}

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  var subArray1 = array.slice(0, array.length / 2);
  var subArray2 = array.slice(array.length / 2);

  subArray1 = mergeSort(subArray1);
  subArray2 = mergeSort(subArray2);

  return merge(subArray1, subArray2);
}


console.log(mergeSort([9, 5, 7, 1]));                // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                      // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));             // [1, 2, 4, 6, 7]
console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler']
// mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]);
// // [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]
