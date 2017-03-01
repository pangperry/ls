//input: array of integers, from 0-19
//output: array of the integers, sorted based on spelling of number
//make a numbersString array, zero is in zero-index spot
//make a copyNumbersStrings of that array and sort it
//map the sorted array to the index of each item, in the numbersString array
//return the result
//
//algo

function wordSort(num1, num2) {
  var NUMBER_WORDS  = ['zero', 'one', 'two', 'three', 'four', 
                       'five', 'six', 'seven', 'eight', 'nine', 
                       'ten', 'eleven', 'twelve', 'thirteen', 
                       'fourteen', 'fifteen', 'sixteen', 
                       'seventeen', 'eighteen', 'nineteen'];

  if (NUMBER_WORDS[num1] > NUMBER_WORDS[num2]) {
    return 1;
  } else if (NUMBER_WORDS[num1] < NUMBER_WORDS[num2]) {
    return -1;
  } else {
    return 0;
  }
};

function alphabeticNumberSort(array) {
  return array.sort(wordSort);
}

/*
function alphabeticNumberSort(numbers) {
  var numbersString = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  var copy = numbersString.slice();
  return copy.sort(comparison).map(function(word) {
    return numbersString.indexOf(word); 
  });
}

function comparison(a, b) {
  if (a > b) {
    return 1;
  } else if (b > a) {
    return - 1;
  } else {
    return 0;
  }
}
 */ 

console.log(alphabeticNumberSort([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));


