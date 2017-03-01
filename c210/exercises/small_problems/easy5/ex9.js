//input: string (of words)
//output: string (with same words, in reverse order);
//
//newString = split string
//reverse newString
//join newString
//return newString

function reverseSentence(string) {
  return string.split(' ').reverse().join(' ');
}

console.log(reverseSentence(''));                     // ''
console.log(reverseSentence('Hello World'));          // 'World Hello'
console.log(reverseSentence('Reverse these words'));  // 'words these Reverse'
