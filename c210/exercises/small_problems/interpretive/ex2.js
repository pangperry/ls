//input: odd number, n
//out: n lines, middle line has n stars, decreases up  and down to form star
//
//
//line 1: 1 star and (n-1) / 2 whitespaces in front
//line 2: 3 stars and (n-3) / 2 whitespaces in front
//
//make array
//iterate from 1 up to n (not inclusive) iterating by 2
//push lines onto array
//whiteSpace = (n-i) / 2
//stars =  i;
//whiteSpace + stars
//
//middle line:
//stars = n;
//
//iterate through array, logging lines
//log middle line
//reverse array and log lines

function diamond(n) {
  sequence(n).forEach(function(number) {
    console.log(line(number, n));
  });
}

function sequence(n) {
  var result = [];
  var increment = 2;

  for (var i = 1; i > 0; i+= increment) {
    result.push(i);
    if (i === n) {
      increment = -2;
    }
  }

  return result;
}

function line(rowLength,n) {
  var whiteSpace = ' '.repeat((n - rowLength) / 2);
  var stars = '*'.repeat(rowLength);
  return whiteSpace + stars;
}

diamond(1);
// logs
// *
diamond(9);
// logs
//     *
//        ***
//          *****
//           *******
//           *********
//            *******
//              *****
//                 ***
//                     *
