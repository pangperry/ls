//input: string of words separated by blankspace
//output: an array of those words, with the length of each word joined to it by a blank space
//
//count words as everything between white spaces
//
//split string on white space (' ') to array
//transform array of words with map
//   at each iteration, return word + ' ' + word.length
//
//return transformed array

function wordLengths(string) {
  return string.split(' ').map(function(word) {
    return word + ' ' + word.length;
  });
}

console.log(wordLengths('hi you')); //['hi 2', 'you 3'];
console.log(wordLengths('cow sheep chicken'));
// result
// ['cow 3', 'sheep 5', 'chicken 7']
//
console.log(wordLengths('baseball hot dogs and apple pie'));
// // result
// ['baseball 8', 'hot 3', 'dogs 4', 'and 3', 'apple 5', 'pie 3']
//
console.log(wordLengths('It ain\'t easy, is it?'));
// // result
// ['It 2', 'ain\'t 5', 'easy, 5', 'is 2', 'it? 3']
//
console.log(wordLengths('Supercalifragilisticexpialidocious'));
// // result
// ['Supercalifragilisticexpialidocious 34']

console.log(wordLengths(''));
// // result
// []

