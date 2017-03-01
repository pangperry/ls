
//input: user input(a number and a letter)
//output: text string with numbers

//prompt the users for a number greater than 0
//-convert to Number set equal to var number
//ask user if they want the 's'(sum) or 'p' product of all of the numbers from 0 to number
//-save to var answer
//if answer.toLowerCase() === 's', sum range 0..number
//set equal to var sum;
//else if answer.toLowerCase() === 'p' get product for range 0..number
//set equal to var product;
//if sum, log the sum message
//if product, log the product message.
//
//rules for sum
//array.reduce(sum)
//rules for product
//array.reduce(product)

function sum(total, digit) {
  return total + digit;
}

function product(total, digit) {
  return total * digit;
}

var number = parseInt(prompt('Please enter a number greater than 0.'), 10);
var response = prompt('Enter "s" to computer the sum, "p" to compute the product.');
var array = [];
var result, operation;;

for (var i = 1; i <= number; i++) {
  array.push(i);
}

if (response.toLowerCase() === 's') {
  result = array.reduce(sum);
  operation = 'sum';
} else if (response.toLowerCase() === 'p') {
  result = array.reduce(product);
  operation = 'product';
  resonse = product;
} 


console.log('The ' + operation + ' of the numbers between 0 and ' + 
    number + ' is ' + result + '.'); 
