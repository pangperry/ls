//input: string of words separated by spaces
//output: string or words, but the first and last letters of each word are swapped

//split string around spaces
//map over array, 
//at each iteration, 
//since strings are immutable, must change words to arrays as well.
//
//return the joined array of  space-separated words 

function swap(string) {
  var words  = string.split(' ');
  return words.map(swapCharacters).join(' ');
}

function swapCharacters(word) {
  if (word.length === 1) {
    return word;
  } else {
    return word.slice(-1) + word.slice(1,-1) + word[0];
  }
}
console.log(swap('Oh what a wonderful day it is'));    // 'hO thaw a londerfuw yad ti si'
//console.log(swap('Abcde'));                            // 'ebcdA'
//console.log(swap('a'));   //'a'
//console.log(swap('')); //''
  
