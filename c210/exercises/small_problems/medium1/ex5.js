//
//iterate through NUMBERS, explicitly passing number and index
//at each iteration, set string = string with global replace the number with the String(index)
var NUMBERS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

function wordToDigit(string) {
  NUMBERS.forEach(function(number, index) {
    var regex = new RegExp('\\b' + number + '\\b', 'ig');
    string = string.replace(regex, String(index));
  });

  return string;
}
console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
//'Please call me at 5 5 5 1 2 3 4. Thanks.'
