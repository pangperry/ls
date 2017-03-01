//input: string (two names separated by whitespace)
//output: the names in reverse, separated by a comma then a space

//split the names
//reverse the names
//join using ', ' as joiner

function swapName(names) {
  return names.split(' ').reverse().join(', ');
}
console.log(swapName('Joe Roberts')); // 'Roberts, Joe'
