function copyProperties(obj1, obj2) {
  var count = 0;
  for (item in obj1) {
    sal[item] = hal[item];
    count++;
  }
  return count;
}

var hal = {
  model: 9000,
  enabled: true,
};

var sal = {};

console.log(copyProperties(hal, sal));  // 2
console.log(sal);                       // { model: 9000, enabled: true }
