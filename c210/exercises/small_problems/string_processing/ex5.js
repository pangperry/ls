//input: string
//output: same string with letters switched from uppercase to lowercase and vice versa
//
//split string on ''
//transform array with map
//  if letter === letter.toUpperCase() return letter.toLowerCase();
//  if letter === letter.toLowerCase() return letter.toUpperCase();
//join transformed array around '' joiner

function swapCase(string) {
  return string.split('').map(function(chr) {
    if (chr === chr.toUpperCase()) {
      return chr.toLowerCase();
    } else if (chr === chr.toLowerCase()) {
      return chr.toUpperCase();
    } else {
      return chr;
    }
  }).join('');
}

console.log(swapCase('aBdE')); // 'AbDe'
console.log(swapCase('aBdE!1')); // 'AbDe!1'
console.log(swapCase('Tonight on XYZ-TV')); // 'tONIGHT ON xyz-tv'
console.log(swapCase('')); // ''

