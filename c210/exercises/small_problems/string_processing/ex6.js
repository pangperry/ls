//input: string
//output: string, with every other chr capitalized.chrs in between, lowercase
//       ...non-letter chrs returned as is, and count as thought they were capitalized
//
//split string to array of strings with split('')
//transform array  with map(explicitly passing chr and index)
//   at each iteration, if index is even, return chr.toUpperCase()
//   otherwise, return chr.toUpperCase
//join('') transformed array and return
//
function staggeredCase(string) {
  return string.split('').map(function(chr, index) {
    return index % 2 === 0 ? chr.toUpperCase() : chr.toLowerCase();
  }).join('');
}

console.log(staggeredCase('abcd')); //'AbCd'
console.log(staggeredCase('a!bcd')); //'A!BcD'
console.log(staggeredCase('ALL_CAPS'));                  // 'AlL_CaPs'
console.log(staggeredCase('ignore 77 the 444 numbers')); // 'IgNoRe 77 ThE 444 NuMbErS'

