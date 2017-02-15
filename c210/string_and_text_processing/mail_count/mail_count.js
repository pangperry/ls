function mailCount(data) {
  var emails = extractEmails(data);
  var dates = extractDates(emails);
  var range = dateRange(dates);

  console.log('Count of Email: ' + countEmails(emails));  
  console.log('Date Range: ' + formatDates(range));
}

function dateRange(unsortedDates) {
  var sortedRange = unsortedDates.sort(function(a,b) {
    return (new Date(a)).getTime() - (new Date(b)).getTime();
  });

  return sortedRange;
}

function formatDates(datesRange) {
  var start = datesRange[0];
  var end = datesRange[datesRange.length - 1];
   
  return format(start) + ' - ' + format(end);
}

function format(date) {
  var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  var myDate = new Date(date);
  var day = days[myDate.getDay()];
  var month = months[myDate.getMonth()];
  var date = myDate.getDate();
  var year = myDate.getFullYear();;

  return day + ' ' + month + ' ' + date + ' ' + year;
}

//Date Range: Sat Jun 25 2016 - Thu Aug 11 2016
function extractDates(emailsArray) {
  var sections = emailsArray.map(function(email) {
    return email.split('#/#')[2];
  });

  return sections.map(function(section) {
    return section.replace(/[(Date:)\s]/g, '');
  });
}

function extractEmails(data) {
  return data.split('##||##');
}

function countEmails(emails) {
  return emails.length;
}


 mailCount(emailData); 
