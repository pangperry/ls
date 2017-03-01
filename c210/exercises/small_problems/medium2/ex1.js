//input: string (of uppercase letters, lowercase letters and other characters
//output: object(with three properties: lowercase, uppercase, not letters
//
//create an object.
//get totals for lowercase letters, uppercase letters and other chars.
//set lowercase property equal to the length of an lowercase letter regex match on the string / string.length
//  round to 2 decimal places
//set the uppercase property equal to the length of a uppercase letter regex match on the string /string.length
//  round to 2 decimal places
//set the notLetters property equalto the length of a not-letter regex match on the string / string.length
//  round to 2 decimal places
//
//return the object
//
//algo:

function letterPercentages(string) {
  var obj = {};
  obj.lowercase = Number(((string.match(/[a-z]/g) || []).length / 2).toFixed(2));
  obj.uppercase = Number(((string.match(/[A-Z]/g) || []).length / 2).toFixed(2));
  obj.other = Number(((string.match(/[^a-zb]/ig) || []).length / 2).toFixed(2));

  return obj;
}

console.log(letterPercentages('abCdef 123')); // { lowercase: 50.00, uppercase: 10.00, neither: 40.00 }
console.log(letterPercentages('AbCd +Ef'));   // { lowercase: 37.50, uppercase: 37.50, neither: 25.00 }
console.log(letterPercentages('123'));        // { lowercase: 0.00, uppercase: 0.00, neither: 100.00 }
