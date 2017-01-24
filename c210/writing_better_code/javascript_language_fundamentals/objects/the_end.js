console.log(penultimate('last word'));               // 'last'
console.log(penultimate('Launch School is great!')); // 'is'

function penultimate(string) {
  return string.split(' ').slice(-2, -1)[0];
}
