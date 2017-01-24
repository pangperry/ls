var phrase = prompt('Please write a phrase:');
phrase = phrase.replace(/\w+/, '');

var characterCount = phrase.length;

console.log('There are ' + characterCount + ' characters in ' + phrase + '.');
