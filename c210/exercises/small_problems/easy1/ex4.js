//create a calculator
//input: user input, string(numbers)
//output: strings

//prompt the user for bill amount,
//   convert response to number and save to var bill
//prompt the user for tip percentage.
//   convert response to number and save to var tip
//**input numbers are whole numbers
//
//calculate tip save to tipAmount
//calculate total- save to totalAmount
//log the tip amount
//log the total amount

var bill = parseInt(prompt('What is the bill?'), 10);
var tip = parseInt(prompt('What is the tip percentage?'), 10);

var tipAmount = bill * tip / 100;
var total = tipAmount + bill;

console.log('The tip is $' + tipAmount.toFixed(1));
console.log('The total is $' + total.toFixed(1));

