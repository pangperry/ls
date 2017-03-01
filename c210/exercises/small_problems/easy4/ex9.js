//input: array of strings
//output: a series of strings, each string on it's own line, 
//each string looks like this "item => count"
//
//
//create newObj
//iterate through vehicles array
//if the item exists in the newObj, increment the value
//if the item doesn't exit, set the obj[itemName] = 1
//
//iterate through the newObj.keys
//for each key, 
//log key + ' => ' + obj[key]
var vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck', 'motorcycle', 'motorcycle', 'car', 'truck'];
function countOccurrences(items) {
  var obj = {};
  vehicles.forEach(function(vehicle) {
    if (obj[vehicle]) {
      obj[vehicle]++;
    } else {
      obj[vehicle] = 1;
    }
  });

  print(obj);
}

function print(obj) {
  Object.keys(obj).forEach(function(key) {
    console.log(key + ' => ' + obj[key]);
  });
}
countOccurrences(vehicles);
