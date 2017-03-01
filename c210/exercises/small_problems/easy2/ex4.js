//input: number
//output:number, the index of the first number with the required number of digits
//
//set a counter to 0;
//declare and assign an array with fibo seed[1,1]
//declare a length variable and set it equal to 0
//use while loop to simultaneoulsy create new fib numbers
//and set length to fib number (as string?) length
//if String(fibNumber.length) >= 2,
//return counter;
//
function findFibonacciIndexByLength(length) {
  var first = 1;
  var second = 1;
  var index = 2;
  var fibonacci;

  do {
    fibonacci = first + second; 
    index++;
    first = second;
    second = fibonacci; 
    } while (String(fibonacci).length < length);

  return index;
}

console.log(findFibonacciIndexByLength(2));     // 7
console.log(findFibonacciIndexByLength(10));    // 45
console.log(findFibonacciIndexByLength(16));    // 74
