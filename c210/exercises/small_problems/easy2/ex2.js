//input: text
//output: text with box around it
//
//get length of string
//creat an outer 
function logInBox(string) {
  var length = string.length;

  console.log(border(length));
  console.log(interior(' '.repeat(length)));
  console.log(interior(string));
  console.log(interior(' '.repeat(length)));
  console.log(border(length));
}

function border(length) {
  return '+-' + '-'.repeat(length) + '-+';
}

function interior(content) {
  return '| ' + content + ' |';
}

console.log(logInBox(('I like ice cream')));
console.log(logInBox(''));
