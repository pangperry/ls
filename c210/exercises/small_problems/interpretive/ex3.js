/*
canSpell set to true

iterate through the letters in my word(which is upcased)
filter blocks for strings that match my letter ***need to use indexOf here
if returned array is empty, return false
else, get indexOf(returned array) from blocks and slice it out
*/

var blocks = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM'];
function isBlockWord(string) {
  var match;
  var word = string.split('');

  for (var i = 0; i < word.length; i++) {
    match = blocks.filter(function(block) {
      return block.indexOf(word[i].toUpperCase()) > -1;
    })[0];

    if (match === undefined) {
      return false;
    } else {
      blocks.splice(blocks.indexOf(match), 1);
    }
  }

  return true;
}


console.log(isBlockWord('BATCH')); // true
console.log(isBlockWord('BUTCH')); // false
console.log(isBlockWord('jest'));  // true


