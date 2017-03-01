/*
   input: string word
   ouput: boolean

make an object from the blocks, letters as key and value

iterate through word(UPPERCASE) to see if its included in the keys
if so, delete the key value pair;
if not, iterate through thevalues to see if they include the letter
if so, delete the key value pair.
if not, return false
otherwise return true

//questions: hyphenated words? empty strings?


function canSpell(word) {
  var letters = { B: 'O', X: 'K', D: 'Q', C: 'P', N: 'A',
                  G: 'T', R: 'E', F: 'S', J: 'W', H: 'U',
                  V: 'I', L: 'Y', Z: 'M',
  }

  var keys = Object.keys(letters);
  var values = keys.map(function(key) {
    return letters[key];
  });

  for (var i = 0; i < word.length; i++) {
    if (keys.includes(word[i].toUpperCase())) {
      delete letters[word[i]];
    } else if (values.includes(letters[word[i].toUpperCase()])) {
      var index = values.indexOf(word[i]);
      delete letters[keys[index]];
    } else {
      return false;
    }

    return true;
  }
}


*/
//second try -------------------------
function canSpell(word) {
  var blocks = [['B', 'O'], ['X', 'K'], ['D', 'Q'], ['C', 'P'], ['N', 'A'],
                ['G', 'T'], ['R', 'E'], ['F', 'S'], ['J', 'W'], ['H', 'U'],
                ['V', 'I'], ['L', 'Y'], ['Z', 'M']];
  var letters = word.toUpperCase().split('');
  var index;

  for (var i = 0; i < letters.length; i++) {
    result = blocks.filter(function(block, idx) {
      index = idx;
      return block.includes(letters[0]);
    });

    if (result[0]) {
      blocks.splice(i,1);
    } else {
      return false;
    }
  }
  
  return true;
}



//array of arrays(letter pairs) would have been easier!!
console.log(canSpell('cast')); //true
console.log(canSpell('CasT')); //true
console.log(canSpell('apple')); // false
console.log(canSpell('assess')); //false


