var DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(number) {
  var result = "";
  var remainder ;

  do {
    remainder = number % 10;
    number = Math.floor(number / 10);
    
    result = DIGITS[remainder] + result;
  } while (number > 0);

  return result;
}
console.log(integerToString(4321));    // "4321"
console.logintegerToString(0));       // "0"
console.log(integerToString(5000));    // "5000"
