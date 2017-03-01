//input: mixed number string
//output: 10 digit number or 0 if "bad"
//
//remove non-digits
//check if it's a bad number

//rules: 
//if < 10 digits or greater than 11, bad (0)
//if 11 digits, but first is not 1, bad(0)
//if 10 digits, good(return number)

function clean(text) {
  var number = text.replace(/[^\d]/g, '');
  if (number.length === 10) {
    return number;
  } else if (number.length === 11 && number[0] === '1') {
    return number.slice(1);
  } else {
    return '0000000000';
  }
}

var numbers = ['2123334444',
               '212-555-6666',
               '212 666 7777',
               '(212) 555 9999',
               '1 212 555 7031',
               '555-555-555'
               ];
var check = function(array) {
              return array.map(function(string) {
                return clean(string);
              });
            };

console.log(check(numbers));

