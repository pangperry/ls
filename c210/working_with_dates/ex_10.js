var today = new Date();

function formattedDate(date) {
  var day = formattedDay(date);
  var month = formattedMonth(date);

  console.log("Today's date is " + day + ', ' + month + ' ' + dateSuffix(date.getDate()));
}

function formattedMonth(date) {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return months[date.getMonth()];
}

function formattedDay(date) {
  var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return daysOfWeek[date.getDay()];
}

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

/*formattedDate(today);
console.log(today.getFullYear());
console.log(today.getYear());
*/
console.log(today.getTime());

