/*
make star top
middle is n* '*" logged
bottome is topArray.reversed and then logged

a top line: outter white space, star, inner white space star, inner white space, star...outter doesn't matter
*/

function star(n) {
  var topHeight = Math.floor(n/2);
  var rows = [];
  var middle = ['*'.repeat(n)]
  var outterWhiteSpace = ' ';
  var innerWhiteSpace = ' ';
  
  for (var i = 0; i < topHeight; i++) {
    rows.push(outterWhiteSpace.repeat(i) + '*' + 
        innerWhiteSpace.repeat(topHeight - 1 - i) + '*' +
        innerWhiteSpace.repeat(topHeight - 1 - i) + '*');
  }

  rows = rows.concat(middle).concat(rows.reverse());
  rows.forEach(function(row) {
    console.log(row);
  });


}

//star(7);
star(9);




