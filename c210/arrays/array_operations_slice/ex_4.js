function join(array, separator) {
  var joined = '';
  for (var i = 0; i < array.length; i++) {
    if (i > 0) {
      joined += separator;
    }

    if (array[i] === undefined || array[i] === null) {
      result += '';
    }else {
      joined += array[i].toString();
    }
  }
  return joined;
}

console.log(join(['bri', 'tru', 'wha'], 'ck '));       
console.log(join([1, 2, 3], ' and '));
