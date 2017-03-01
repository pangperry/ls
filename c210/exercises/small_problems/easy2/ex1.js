//input: string
//output: string
//
//take string, return string where all consecutive
//duplicate characters are collapsed to a single
//character
//
//split the string to array
//filter array:
//return char !== chars[index +1]
//return the joined array

function crunch(string) {
  var chars = string.split('');
  return chars.filter(function(char, index) {
    return char !== chars[index + 1];
  }).join('');
}


console.log(crunch('ddaaiillyy ddoouubbllee'));        // 'daily double'
console.log(crunch('4444abcabccba'));                  // '4abcabcba'
console.log(crunch('ggggggggggggggg'));                // 'g'
console.log(crunch('a'));                              // 'a'
console.log(crunch(''));                               // ''
