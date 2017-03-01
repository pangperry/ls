//input: string number with spaces at least
//output: boolean
//
//do I want to check that it's always 16 digits?
//assuming that I can ignore any funky numbers like 123b or 123+
//I am going to check for 16 digits

//algorithm: 
//remove non-digits and check length
//split to array and reverse
//map to numbers
//map over array, even indexes, return number, odd indexes
//return number X 2, or number X 2 - 9 if doubled number > 10
//reduce array and check that sum % 10 === 0

  
function checkSum(string) {
  var number = string.replace(/[^\d]/g, '');
  var digits = number.split('').reverse().map(Number);
  var result;

  if (number.length !== 16) {
    return false;
  }

  digits = digits.map(function(digit, index) {
              if (index % 2 === 0) {
                return digit;
              } else {
                return digit < 5 ? digit * 2 : 2 * digit - 9;
              }
            });

  result = digits.reduce(function(sum, number) {
    return sum + number;
  });

  return result % 10 === 0 ? true : false;
}

//part two -------------------------------------

function makeValid(string) {
  if (checkSum(string)) {
    return string;
  }

  for (var i = 1; i < 10; i++) {
    if (checkSum(string + String(i))) {
      return string + String(i);
    }
  }
}

console.log(makeValid('2323 2005 7766 355')); //'2323 2005 7766 3554'
console.log(makeValid('111')); //'1115'
console.log(makeValid('2323 2005 7766 3554'));
/*
console.log(checkSum('2323 2005 7766 3554')); //valid
console.log(checkSum('2323 2039 7766 3554')); //valid
console.log(checkSum('2323 2005 7766 3564')); //not valid
console.log(checkSum('')); //not valid
console.log(checkSum('0')); //not valid
console.log(checkSum('1414')); //not valid
*/
