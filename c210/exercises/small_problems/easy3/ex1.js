//input: none
//output: string with teddy's age and statement below
//
//compute age
//number = (200 - 20) * random number

function ageGenerator(max, min) {
  var age = Math.floor((max - min) * Math.random() + 20);
  console.log('Teddy is ' + age + ' years old!');
}
console.log(ageGenerator(200, 20));
