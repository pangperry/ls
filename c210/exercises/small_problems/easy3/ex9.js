//input: string
//output: object
//
//take a string of space-seprated words, return an object 
//with the word lengths as key and the number that each length occurs as the corresponding value
//
//string consists of string-separated words
//  punctuation considered part of the adjoining word
//split words into array of words
//map words to lenths
//create obj
//iterate through lengths  and 
//either add length to obj
//or increment existing obj[length];
//return object
//what about multiple spaces?

function wordSizes(string) {
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
