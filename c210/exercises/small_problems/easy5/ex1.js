//input: string
//output: string, where each character in original string
//     doubled.
//create result
//set result = split string and map resulting array, returning each item twice
//join mapped array and return string


function repeater(string) {
  var result = string.split('').map(double);
  return result.join('');
}

function double(item) {
  return item + item;
}
console.log(repeater('Hello'));     // "HHeelllloo"
console.log(repeater("Good job!")); // "GGoooodd  jjoobb!!"
console.log(repeater(''));          // ''
