//input: number
//output: string
//
var DEGREE = '\xB0';
var MINUTES_PER_DEGREE = 60;
var SECONDS_PER_DEGREE = 3600;

function dms(degreesFloat) {
  var degreesInt = Math.floor(degreesFloat); 
  var minutes = Math.floor((degreesFloat - degreesInt) * MINUTES_PER_DEGREE);
  var seconds = Math.floor(
      (degreesFloat - degreesInt - (minutes / MINUTES_PER_DEGREE)) * 
      SECONDS_PER_DEGREE
  );
  return degreesInt + DEGREE + padZeroes(minutes) + "'" +
                               padZeroes(seconds) + '"';       
}

function padZeroes(number) {
  var numString = String(number);
  return numString.length < 2 ?  ('0' + numString) : numString;
}


console.log(dms(30));        // 30°00'00"
console.log(dms(76.73));     // 76°43'48"
console.log(dms(254.6));     // 254°35'59"
console.log(dms(93.034773)); // 93°02'05"
console.log(dms(0));         // 0°00'00"
console.log(dms(360));       // 360°00'00" or 0°00'00"


