//input: number
//output: string(number + suffix);
//
//take number, determin what century centrury it is
//return that century as string with appropriate suffix
//
//examples:
//
//algo:
//get century and remainder
//  century is year /100
//  remainder is year  % 100;
//  but, if remainder > 1, then century += 1
//set suffix;
//if century % 100 === 11, 12, 13, suffix = 'th'
//else if century % 10 === 1, suffix = 'st
//else if century % 10 === 2, suffix = 'nd'
//else if century % 10 === 3, suffix = 'rd'
//else suffix = 'th'
//return String(century) + suffix

function century(year) {
  var century = Math.floor(year / 100);
  var remainder = year % 100;
  var suffix;

  if (remainder > 0) {
    century +=1;
  }

  if (century % 100 === 11 || century % 100 === 12 || century % 100 === 13) {
    suffix = 'th';
  } else if (century % 100 === 1) {
    suffix = 'st';
  } else if (century % 100 === 2) {
    suffix = 'nd';
  } else if (century % 100 === 3) {
    suffix = 'rd';
  } else {
    suffix = 'th'
  }

  return String(century) + suffix;
}



console.log(century(2000)); //'20th'
console.log(century(2001));        // '21st'
console.log(century(1965));        // '20th'
console.log(century(256));         // '3rd'
console.log(century(5));           // '1st'
console.log(century(10103));       // '102nd'
console.log(century(1052));        // '11th'
console.log(century(1127));        // '12th'
console.log(century(11201));       // '113th'
