//input: string
//output: same string, but with chrs alternating between uppercase and lowercase...
//        non-letters don't count in caps order (i.e., c!ef --> C!e)
//
//split string to array
//var case = 'up;
//transform array(map)
//at each iteration
//  if chr not letter, return chr;
//  else if case === 'up', case = 'down'; return chr.toLowerCase();
//  else if case === 'down', case = 'up';return chr.toUpperCase();
//  
//join transformed array around ''

function staggeredCase(string) {
  var chrCase = 'down';
  return string.split('').map(function(chr) {
    if (/[^a-z]/i.test(chr)) {
      return chr;
    } else if (chrCase === 'up') {
      chrCase = 'down';
      return chr.toLowerCase();
    } else {
      chrCase = 'up';
      return chr.toUpperCase();
    }
  }).join('');
}

console.log(staggeredCase('hello')); //'HeLlO'
console.log(staggeredCase('1ello')); //'1ElLo''
console.log(staggeredCase('I Love Launch School!'));     // 'I lOvE lAuNcH sChOoL!'
console.log(staggeredCase('ALL CAPS'));                  // 'AlL cApS'
console.log(staggeredCase('ignore 77 the 444 numbers')); // 'IgNoRe 77 ThE 444 nUmBeRs'
