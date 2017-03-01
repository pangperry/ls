//input: number
//output: string
//
//given n, create n row of spaces and asterixes.
//asterixes are right justified
//rows grow from 1 to 9 stars
//the rest of the row is made of spaces
//iterate from 1 to n
//i asterix;;
//n - i whiteSpace;
//log strings whiteSpace +  asterix

function triangle(n) {
  var asterix;
  var whiteSpace;
  for (var i = 1; i <= n; i++) {
    asterix = '*'.repeat(i);
    whiteSpace = ' '.repeat(n - i);
    console.log(whiteSpace + asterix);
  }
}


console.log(triangle(5));
console.log(triangle(9));

