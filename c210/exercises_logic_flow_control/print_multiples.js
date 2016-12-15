function printMultiples(number) {
  for (var i = 100; i > 0; i--) {
    if (i % number === 0 && i % 2 === 1) {
      console.log(i);
    }
  }
}
printMultiples(17);


function printMultiples2(number) {
  var multiple = Math.floor(100 / number) * number;
  while (multiple > 0) {
    if (multiple % 2 === 1) {
      console.log(multiple);
    }

    multiple -= number;
  }
}

printMultiples(17);
