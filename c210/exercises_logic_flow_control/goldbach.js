function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (var i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function checkGoldbach(number) {
  if (number < 4 || number % 2 === 1) {
    console.log(null);
    return; // why return with nothing?
  }
  for (var i = 2; i < number; i++) {
    var temp = number - i;
    if (isPrime(temp) && isPrime(i)) {
      console.log(i, temp);
    }
  }
}
  
