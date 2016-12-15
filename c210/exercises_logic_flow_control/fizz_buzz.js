function fizzBuzz() {
  for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log('Fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();

/*
function fizzbuzz2() {
  var message;

  for (var i = 1; i <= 100; i++) {
    message = '';
    if (i % 3 == 0) {
      message += 'Fizz';
    }

    if (i % 5 == 0) {
      message += 'Buzz';
    }

    console.log(message || i);
  }
}
fizzBuzz2();
*/
