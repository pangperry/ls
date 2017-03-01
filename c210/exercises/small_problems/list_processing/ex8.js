//input: array of arrays, inner arrays contain string item and item count
//output: single array, with each string appearing according to count
//
//create results =  [];
//iterate through array for each
//for each iteration, use for loop to push item onto results, count times
//return results
//

function buyFruit(array) {
  var results = [];
  array.forEach(function(pair) {
    for (var i = 1; i <= pair[1]; i++) {
      results.push(pair[0]);
    }
  });

  return results;
}

console.log(buyFruit([['apple', 2],['orange', 3]])); //['apple', 'apple', 'orange', 'orange', 'orange']
