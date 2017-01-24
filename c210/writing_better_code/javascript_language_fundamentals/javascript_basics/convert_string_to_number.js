var numbers = {
  '0' : 0, '1' : 1, '2' : 2, '3' : 3, '4' : 4, 
  '5' : 5, '6' : 6, '7' : 7, '8' : 8, '9' : 9
};

function stringToInteger(string) {
  var result = 0;
  
  for (var i = 0; i < string.length; i++) {
    var digit = numbers[string[i]];
    result *= 10;
    result += digit;
  }

  return result;
}

console.log(stringToInteger('4321'));          // 4321
console.log(stringToInteger('570'));           // 570
