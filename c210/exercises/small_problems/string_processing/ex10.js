//input: a word and text
//output: the text, with the word highlighted (i.e., **WORD**) in the text
//
//create a RegExp object, to pass in the variable '\\b' + word + '\\b'
function searchWord(word, text) {
  var regex = new RegExp('\\b' + word + '\\b', 'gi');
  return text.replace(regex, '**' + word.toUpperCase() + '**');
}

console.log(searchWord('on', 'Tons on the onerous path.')); //'Tons **ON** the onerous path.'

