function mystery_math(text) {
  return text.replace(/[+\-*\/]/g, '?');
}
console.log(mystery_math('4 + 3 - 5 = 2'));
// -> '4 ? 3 - 5 = 2'

console.log(mystery_math('(4 * 3 + 2) / 7 - 1 = 1'));
// -> '(4 ? 3 + 2) / 7 - 1 = 1'
