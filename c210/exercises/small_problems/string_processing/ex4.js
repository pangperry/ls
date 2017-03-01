//input: string of words
//output: original string, but with the first letter of every word capitalized and the succeeding letters, lowercase
//
//quesitons: any not words? 
//           only separated by spaces?
//           any not letters (apart from white spaces?)
//
//algo:
//split string on whitespace joiner
//map resulting words
//   at each iteration, return 
//   word[0].toUpperCase() + word.slice(1).toLowerCase();
//join the resulting array on whitespace joiner


function capitalizeWords(string) {
  return string.split(' ').map(function(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  });
}
console.log(capitalizeWords('see spot run'));//'See Spot Run'
console.log(capitalizeWords('SEE SPOT RUN'));//'See Spot Run'
console.log(capitalizeWords('this is a "quoted" word')); 'This Is A "quoted" Word'
