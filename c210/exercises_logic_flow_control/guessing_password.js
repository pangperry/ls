var password = '55secrets55';

function guessPassword() {
  for (var failed = 1; failed <= 3; failed++) {
    var guess = prompt("what is the password:");

    if (guess === password) {
      console.log('You have successfully logged in");
      break;
    } 

    if (failed == 3) {
      console.log('You have been denied access');
      break;
    }
  }
}

  
