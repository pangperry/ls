//input: number(year)
//output: boolean
//
//test number to see if it is a leap year.
//before 1752, use julian calendar
//1752 and after, use gregorian
//
//rules: 
//gregorian:
//if divisible by 4, but not 100 --true
//or, if divisible by 400 -- true
//otherwise, false
//julian, divisible by 4, true
//otherwise false
//
//algo, check if number less than 1752, if so
//test julian(year)
//if year >= 1752, gregorian(year)

function isLeapYear(year) {
  if (year < 1752) {
    return julian(year);
  } else {
    return gregorian(year);
  }
}

function julian(year) {
  return year % 4 === 0;
}

function gregorian(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 4 === 0 && !(year % 100 === 0)) {
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
console.log(isLeapYear(1700));     // true
console.log(isLeapYear(1));        // false
console.log(isLeapYear(100));      // true
console.log(isLeapYear(400));      // true
