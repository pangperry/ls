//input: user input
//output: string containing the 6th
var numbers = [];
var last;
var result;

numbers.push(prompt('Enter the 1st number: '));
numbers.push(prompt('Enter the 2nd number: '));
numbers.push(prompt('Enter the 3rd number: '));
numbers.push(prompt('Enter the 4th number: '));
numbers.push(prompt('Enter the 5th number: '));
last = (prompt('Enter the last  number: '));

if (numbers.includes(last)) {
  result = ' appears ' ;
} else {
  result = ' does not appear '
}

console.log('The number ' + last + result + 'in ' + '[' + numbers + ']');

