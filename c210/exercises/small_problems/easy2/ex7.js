//input: number
//output: the number or double the number
//
//check if number is a double number
//if double, return it
//if not double, return number * 2
//
//rules for double number:
//
//length is even
//the first half of digits are equal to the last half 
//
//algo: 
//set length = String(number);
//set half = length / 2;
//check if String(number).slice(0,half) === String(number).slice(half, length);
function twice(number) {
  if (isDouble(number)) {
    return number;
  } else {
    return number * 2;
  }
}

function isDouble(number) {
 var length = String(number).length;
 var half = length / 2;
 if (length % 2 === 1) {
   return false;
 } else if (String(number).slice(0, half) !== 
     String(number).slice(half, length)) {
   return false;
 } else {
   return true;
 }
}

console.log(twice(37));                 // 74
console.log(twice(44));                 // 44
console.log(twice(334433));             // 668866
console.log(twice(444));                // 888
console.log(twice(107));                // 214
console.log(twice(103103));             // 103103
console.log(twice(3333));               // 3333
console.log(twice(7676));               // 7676
