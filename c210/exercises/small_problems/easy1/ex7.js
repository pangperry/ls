//input: number
//outpu: boolean
//
//check number to see if it's a leap year
//if leap year, return true.
//if not leap year, return false
//
//rules:
//leap year if divisible by 4, but not if divisible by 100, 
//unless it's divisible by 400.
//
//algo:
//check if number is divisible by 400
//if so, return true
//if divisible by 4, but not by 100, return true
//otherwise, return false.
//
function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if(year % 4 === 0 && !(year % 100 === 0)) {
    return true;
  } else {
    return false;
  }
}


console.log(isLeapYear(2016));     // true
console.log(isLeapYear(2015));     // false
console.log(isLeapYear(2100));     // false
console.log(isLeapYear(2400));     // true
console.log(isLeapYear(240000));   // true
console.log(isLeapYear(240001));   // false
console.log(isLeapYear(2000));     // true
console.log(isLeapYear(1900));     // false
console.log(isLeapYear(1752));     // true
console.log(isLeapYear(1700));     // false
console.log(isLeapYear(1));        // false
console.log(isLeapYear(100));      // false
console.log(isLeapYear(400));      // true

