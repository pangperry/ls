//question 1
var firstName = 'Johnny';
var lastName = 'ComeLately';
var fullName = firstName +  ' ' + lastName;

console.log(fullName);

console.log(fullName.split(' '));

//question 2
console.log(firstName.concat(lastName));

//question 3
console.log(fullName.split(' '));

//quesiton 4
var language = 'JavaScript';
var idx = language.indexOf('S');
console.log(idx);

//question 5
var charCode = language.charCodeAt(idx);
console.log(charCode);

//question 6
console.log(String.fromCharCode(charCode));

//question 7
console.log(language.lastIndexOf('a'));

//question 8 
var a = 'a';
var b = 'b';
console.log(a > b);

b = 'B';
console.log(a > b);

//question 9
var aIndex = language.indexOf('a');
var vIndex = language.indexOf('v');

console.log(language.substr(aIndex, 4));
console.log(language.substr(vIndex, 4));

//question 10
console.log(language.substring(aIndex, 4));
console.log(language.substring(vIndex, 4));

//question 11
var fact1 = 'JavaScript is fun';
var fact2 = 'Kids like it too';
var compoundSentence = fact1 + ' and ' + fact2[0].toLowerCase() + fact2.slice(1);
console.log(compoundSentence);

//question 12
console.log(fact1[0]);
console.log(fact2[0]);

//question 13
var pi = 22/7;
pi = pi.toString();
console.log(pi.lastIndexOf(14));

//question 14
//var boxNumber = (356).toString();
var boxNumber = 356..toString();
console.log(boxNumber);

//question 15
boxNumber = parseInt(boxNumber, 10);
console.log(typeof boxNumber);

boxNumber = String(boxNumber);
console.log(typeof boxNumber);

//question 16
var name = prompt('What is your name?');
if (name.endsWith('!')) {
  console.log('HELLO ' + name.toUpperCase() + '. WHY ARE WE SCREAMING?');
} else {
  console.log('Hello ' + name);
}


