/*
input: a string
output: array of numbers
set incrementor to 0

split string into an array of string-numbers and string ranges
map through array, converting any string ranges to arrays of number ranges
  the string-numbers should be returns are an an array of a number
create and array of numbers using str.match for numbers, or string.split for the separators
transform (map) the array of number arrays to generate a single array of numbers

with array of numbers, transform according to the following rules:
rules
if previous number < current number, return incrementor + current number
if previous number >= current number, 
incrementor += 10;
return number + incrementor;
*/

//must try this again
function longHand(string) {
  var mixed = string.split(',');
  var incrementor = 0;
  var numbers;
  var result;

 numbers = mixed.map(function(section) {
            if (section.match(/(\.\.|:|-)/)) {
              var range = []
              var start = Number(section[0]);
              var end = Number(section[section.length - 1]);
              for (var i = start; i < end; i++) {
               range.push(i); 
              }
              return range;
            } else {
              return [Number(section)];
            }
 });

 numbers = numbers.map(function(array) {
   return array[0];
 });

 console.log(numbers);
 result = numbers.map(function(number, index) {
   if (number < numbers[index + 1]) {
     return number + incrementor;
   } else {
     incrementor += 10;
      return number + incrementor;
    }
  });

  return result;
  
}


console.log(longHand('1,3,7,4,1')); //[1,3,7,12,14,21]
console.log(longHand('1-3,1-2')); //[1,2,3,11,12]
console.log(longHand('1:5:2')); // [1,2,3,4,5,6,7,8,9,10,11,12]
console.log(longHand('104-2')); // [104, 105,106,107,108,109,110,111, 112]
console.log(longHand('104..02')); //[104, 105 ...202]
console.log(longHand('545, 64:11')); //[545, 564, 565, ... 611]

