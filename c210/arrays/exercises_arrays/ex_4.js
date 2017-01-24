var num = 1;
var numArray = [5,4,3,2,1];

function findInstance(item, array) {
  var position = -1;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === item) {
      position = i;
      break;
    }
  }

  return position;
}

console.log(findInstance(num, numArray));
