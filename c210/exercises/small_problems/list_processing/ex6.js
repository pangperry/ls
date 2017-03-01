//input: string
//output: array of all substrings startigs from each letter

function substrings(string) {
  var results = [];
  string.split('').forEach(function(letter, index) {
    results = results.concat(substringFromStart(string.slice(index)));
  });

  return results;
}
function substringFromStart(string) {
  return string.split('').map(function(item, index) {
    return string.substr(0, index + 1);
  });
}

console.log(substrings('abcde'));
// result
// [ 'a', 'ab', 'abc', 'abcd', 'abcde',
//   'b', 'bc', 'bcd', 'bcde',
//     'c', 'cd', 'cde',
//       'd', 'de',
//         'e' ]
