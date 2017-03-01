//input: string
//output: array of all substrings made from starting at the beginning of the input string
//
//
//split string
//map array, returning original string.substr(0, index +1)
//return the mapped array
//
function substringsAtStart(letters) {
  return letters.split('').map(function(letter, index) {
    return letters.substr(0, index + 1);
  });
}


console.log(substringsAtStart('abc'));   // ['a', 'ab', 'abc']
console.log(substringsAtStart('a'));     // ['a']
console.log(substringsAtStart('xyzzy')); // ['x', 'xy', 'xyz', 'xyzz', 'xyzzy']

