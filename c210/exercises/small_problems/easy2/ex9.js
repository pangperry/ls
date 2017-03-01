//input: string: words and some non-alphabetic characters
//output: string with only characters and single spaces
//
//replace all non-aphabetic characters with single space
//replace any repeated white spaces with single white spaces
//
//
function cleanup(string) {
  return string.replace(/[^a-z]/ig, ' ').replace(/\s+/g, ' ');
}
console.log(cleanup('---what\'s my +*& line?')); ' what s my line '
