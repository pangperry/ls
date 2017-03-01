//input: integer,n , representing the nth nubmer in a fibo sequence
//output: integer, the nth fibo digit
//
//set fibSequence = [0,1];
//iterate from 2 to n, for loop
//at each iteration,fibo.push(fibSequence[i - 2] + fibSequence[i - 1];
//
//afterloop, return fibSequence[n];

function fibonacci(nth) {
  var fibSequence = [0,1];
  if (nth <= 2) {
    return 1;
  }

  for (var i = 2; i <= nth; i++) {
    fibSequence[i] = fibSequence[i - 2] + fibSequence[i - 1];
  }

  return  fibSequence[nth];
}
console.log(fibonacci(2));    // 6765
console.log(fibonacci(50));   // 12586269025
console.log(fibonacci(100));  // 354224848179261915075
