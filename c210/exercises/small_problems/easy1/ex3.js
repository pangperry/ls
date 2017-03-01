//input: user input, string(numbers)
// output: string, including text and numbers
//
//
// no need to validate input
// ask user to "Enter the length of the room in meters:
// take input from the user and save it to var length
// ask user to 'enter the width of the room in meters'
// take input from the user and save it to var width
// convert length and width to numbers and mulitply
//      set result equal to var areaMeters
// convert area to square feet and set equal to square feet
//      ---1 square meter == 10.7639 square feet
// NUMBERS ROUND TO 2 decimals?
//
// log string response with aree_meters and areaFeet

var SQMETERS_TO_SQFEET = 10.7639;
var lengthMeters = Number(prompt('Enter the length of the room in meters:'));
var widthMeters = Number(prompt('Enter the width of the room in meters:'));

var areaMeters = lengthMeters * widthMeters;
var areaFeet = areaMeters * SQMETERS_TO_SQFEET;

console.log('The area ofthe room is ' + 
    areaMeters.toFixed(1) + ' square meters (' + 
      areaFeet.toFixed(2) + ') square feet.');

