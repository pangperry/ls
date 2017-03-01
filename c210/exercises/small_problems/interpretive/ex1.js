//input: n (both the number of switches and the number of times I will iterate through them)
//output: an array containing the numbers of the lights that are switched on after toggling
//
//create an array of length n, all containing the value false--to represent lights that are off
//for loop
//
//iterate through the numbers(for loop), and on each iteratation, 
//transform the, array, toggling the values that have an index which is a multiple of i
//--re-assign the value of array at each pass
//
//toggle(value) - if true, return false, if false return true
//
//after n iterations, transform(map) array to an array of index values corresponding to the true values in the array
//
function lights(n) {
  var array = [];
  for (var i = 1; i <= n; i++) {
    array.push(false);
  }

  for (var i = 1; i <= n; i++) {
    array = array.map(function(light, index) {
      if (index % i === 0) {
        return toggle(light);
      } else {
        return light;
      }
    });
  }

  array =  array.map(function(light, index) {
    if (light === true) {
      return index;
    }
  });

  return array.filter(function(item) {
    if (item !== undefined) {
      return item;
    }
  });
}

function toggle(light) {
  return light === true ? false : true;
}

  console.log(lights(5));
  //round 1: all on
  //round 2: 2,4 off; 1,3,5 on
  //round 3: 2,3,4 off; 1,5 on
//round 4: 2,3 off, 1,4,5 on
//round 5: 2,3,5 off; 1,4 on
