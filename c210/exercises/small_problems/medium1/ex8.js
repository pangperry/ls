//input: number --indx of fib number to compute;
//output:fib number
//
//if n  === 1, return 1

var memo = {};
function fibonacci(n) {
  if (n === 1 || n === 2) {
    return 1;
  } else if (memo[n]) {
    return memo[n];
  } else {
    memo[n] = fibonacci(n - 2) + fibonacci(n - 1);
    return memo[n];
  }
}

console.log(fibonacci(1));   // 1
console.log(fibonacci(2));   // 1
console.log(fibonacci(3));   // 2
console.log(fibonacci(4));   // 3
console.log(fibonacci(5));   // 5
console.log(fibonacci(12));  // 144
console.log(fibonacci(50));  // 6765
