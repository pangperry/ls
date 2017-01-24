function repeatedCharacters(string) {
  var result = {};
  var lowerCaseString = string.toLowerCase();
  var i;
  var key;

  for (i = 0; i < lowerCaseString.length; i++) {
    if (result[lowerCaseString[i]] !== undefined ) {
      result[lowerCaseString[i]] += 1;
    } else { 
      result[lowerCaseString[i]] = 1;
    }
  }

  for (key in result) {
    if (result[key] === 1) {
      delete result[key];
    }
  }

  return result;
}
console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
/*
repeatedCharacters('Combination');    // { o: 2, i: 2, n: 2 }
repeatedCharacters('Pet');            // {}
repeatedCharacters('Paper');          // { p: 2 }
repeatedCharacters('Baseless');       // { s: 3, e: 2 }
*/


