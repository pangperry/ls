function gcd(a, b) {
  while (b !== 0) {
    var temp = b;
    b = a % b;
    a = temp;
  }

  return a;
}

//console.log(gcd(12, 4));   // 4
console.log(gcd(15, 10));  // 5
gcd(9, 2);    // 1

