var today = new Date();
var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

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

console.log("Today's date is " + daysOfWeek[today.getDay()] + ', ' +
                                 months[today.getMonth()] + ' ' +
                                 dateSuffix(today.getDate()));


