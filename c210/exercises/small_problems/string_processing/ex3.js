//input: string with letters (uppercase, lowercase) and other chars
//output: an object with 3 properties, lowercase, uppercase, other, with corresponding counts as values
//
//create newObject
//set newObject.lowercase = string.match(/[a-z]/g).length or 0
//set newObject.uppercase = string.match(/[A-Z]/g).length or 0;
//set newObject.other = string.match(/[^a-z]/gi).length or 0;
//return newObject
//
function letterCounter(string) {
  var newObject = {};
  newObject.lowercase = (string.match(/[a-z]/g) || []).length;
  newObject.uppercase = (string.match(/[A-Z]/g) || []).length;
  newObject.other = (string.match(/[^A-Z]/gi) || []).length; 
  return newObject;
}
console.log(letterCounter('adB1')); // {lowercase: 2, uppercase: 1, other: 0}
console.log(letterCounter('ad-B1')); // {lowercase: 2, uppercase: 1, other: 1}
console.log(letterCounter('')); // {lowercase: 0, uppercase: 0, other: 0}

