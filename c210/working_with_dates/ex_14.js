var today = new Date();
var tomorrow = new Date(today.getTime());
var nextWeek = new Date(today.getTime());


function formatTime(date) {
  return addZero(date.getHours()) + ':' + addZero(date.getMinutes());
}

function addZero(val) {
  return String(val).length < 2 ? '0' + val : val;
} 

function formattedDate(date) {
  var day = formattedDay(date);
  var month = formattedMonth(date);

  console.log("The date is " + day + ', ' + month + ' ' + dateSuffix(date.getDate()));
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

/*
tomorrow.setDate(today.getDate() + 1);
nextWeek.setDate(today.getDate() + 7);

console.log(today.toDateString() === nextWeek.toDateString());
console.log(today.toDateString() === nextWeek.toDateString());
*/

console.log(formatTime(today));
