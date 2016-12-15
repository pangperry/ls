function generatePattern(n) {
  var string;
  
  for (var i = 1; i <= n; i++) {
    string = '';
    for (var j = 1; j <= i; j++) {
      string += String(j);
    }

    for (var k = i + 1; k <= n; k++) {
      if (k > 9) {
        string += '**';
      } 
      else {
        string += '*';
      }
    }

    console.log(string);
  }
}

/*solution for longer patterns (greater than 99 or more) */

/*
function generatePattern(n) {
  var lastRowString = '';
  var width;
  var string;
  var stars;

  for (var i = 1; i <= n; i++) {
    lastRowString += String(i);
  }

  width = lastRowString.length;

  for (var i = 1; i <= n; i++) {
    string = '';
    for (var j = 1; j <= i; j++) {
      string += String(j);
    }

    stars = width - string.length;

    for (var k = 1; k <= stars; k++) {
      string += '*';
    }

    console.log(string);
  }
}
*/
