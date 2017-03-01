//input: template sentence - see below
//output: the selected template, with the variables replaced by random selections from each to the arppropriate word lists
//
//
//the REPLACEMENT_TEXT is all an object
//



function madlibs(template) {
  var REPLACEMENT_TEXTS = {
    adjective: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
    noun: ['fox', 'dog', 'head', 'leg', 'tail'],
    verb: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
    adverb: ['easily', 'lazily', 'noisily', 'excitedly'],
  }

  function replaceText(match) {
    var key = match.replace(/[^a-z]/g, '');
    var index = Math.floor(Math.random() * REPLACEMENT_TEXTS[key].length);
    return REPLACEMENT_TEXTS[key][index];
  }

  return template.replace(/\${[a-z]+}/g, replaceText);
}

var template1 = 'The ${adjective} brown ${noun} ${adverb} ' + 
'${verb} the ${adjective} yellow ${noun}' +
', who ${adverb} ${verb} his ${noun}' +
' and looks around';

console.log(madlibs(template1));

