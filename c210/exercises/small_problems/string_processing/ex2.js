//input: array of strings
//output: array of same strings, but with vowels removes([aeiou])
//
//map through array
//at each iteration, return string.replace(/[aeiuo]/ig, '')
//
//return mapped array
//
function removeVowels(strings) {
  return strings.map(function(string) {
    return string.replace(/[aeiou]/ig, '');
  });
}

console.log(removeVowels(['apples'])); //['ppls']
console.log(removeVowels(['cup', 'food'])); //['cp', 'fd']
console.log(removeVowels(['CUP', 'food'])); //['CP', 'fd']


