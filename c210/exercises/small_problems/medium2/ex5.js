//input:number
//output: number (a featured number) or text: 'there is no next featured number'
//
//if number > 10 digits, 'there is no next featured number'
//iterate through multiples of seven, that are odd
//check if all digits are unique, if so, that's the answer
//if reach 11 digits, no next featured number
//
//rules for iteration:
//set start to Math.ceil(number / 7) * 7
//start loop(var featured = start; String(featured).length < 11; i++)
//if featured === number, featured += 7;
//loop:
//if featured is odd, check digits
//if digits unique, return featured.
//end loop
//return 'no next fetured number'
//
//algo for checking if digits are unique: areUnique
//var num = String(number).split;
//loop:
//var check = num.pop
//if (num.indexOf(check) > 0) return 
//  false;
//end loop
//true
//
function featured(number) {
  var INVALID = 'there is no next featured number';
  var start = Math.ceil(number / 7) * 7;
  if (String(number).length > 10) {
    return INVALID;
  } else if (start === number) {
    start += 7;
  }

  for (var featured = start; String(featured).length < 11; featured += 7) {
    if (isOdd(featured) && uniqueDigits(featured)) {
      return featured;
    }
  }

  return INVALID;
}

function isOdd(number) {
  return number % 2 === 1;
}

function uniqueDigits(number) {
  var num = String(number).split('');
  var check;
  for (var i = 0; i < String(number).length; i++) {
    check = num.pop();
    if(num.indexOf(check) >= 0) {
      return false;
    }
  }

  return true;
}


console.log(featured(19)); //21
console.log(featured(21)); //35
console.log(featured(71)); //91
console.log(featured(12));        // 21
console.log(featured(20));        // 21
console.log(featured(21));        // 35
console.log(featured(997));       // 1029
console.log(featured(1029));      // 1043
console.log(featured(999999));    // 1023547
console.log(featured(999999987)); // 1023456987
console.log(featured(999999987123)); //'there is no next featured number' 
