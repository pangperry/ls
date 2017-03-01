var age = prompt('What is your age? ');
var retirementAge = prompt('At what age would you like to retire? ');
var dif = retirementAge - age;
var date = (new Date).getFullYear();
var retirementDate = date + dif;

console.log("It's " + date + ". You will retire in " + retirementDate + ".");
console.log("You have only " + dif + " years of work to go!");

