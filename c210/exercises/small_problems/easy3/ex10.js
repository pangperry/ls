function wordSizes(string) {
  string = string.replace(/[^a-z\s]/ig, '');
  var words = string.split(' ');
  var lengths = words.map(wordLength);
  var result = {};

  for (var i = 0; i < lengths.length; i++) {
    if (!result[lengths[i]]) {
      result[lengths[i]] = 1;
    } else {
      result[lengths[i]] += 1;
    }
  }

  return result;
}

function wordLength(word) {
  return word.length;
}
console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4" : "1", "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes('What\'s up doc?'));                             // { "6": 1, "2": 1, "4": 1 }
console.log(wordSizes(''));                                            // {}
