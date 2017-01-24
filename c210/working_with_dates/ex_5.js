var today = new Date();
var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function dateSuffix(date) {
  var suffix = 'th';
  var dateString = date.toString();
  var digit;

 if (dateString === '11' || dateString === '12' || dateString === '13') {
   return String(date) + suffix;
 }

  if (dateString.length === 1 ) {
    digit = dateString[0];
  }
  else if (dateString[0] !== '1') {
    digit = dateString[1];
  }

  if (digit === '1') {
    suffix = 'st';
  } else if (digit === '2') {
    suffix = 'nd';
  } else if (digit === '3') {
    suffix = 'rd';
  }

  return String(date) + suffix;
}

console.log(dateSuffix(11));
console.log("Today's day is " + daysOfWeek[today.getDay()] + ", the " + dateSuffix(today.getDate()));


