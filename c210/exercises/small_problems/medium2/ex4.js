//input: year
//output: number of friday the 13s in that year
//
//iterate from 1 - 12
//at each iteration, create a new date object with the year, month and date
//if day is friday, counter +=1
//
function fridayThe13ths(year) {
  var total13ths = 0;
  for (var i = 1; i < 13; i++) {
    if (new Date(year, i, 13).getDay() === 5) {
      total13ths++;
    }
  }

  return total13ths;
}
console.log(fridayThe13ths(2015)); // 3
console.log(fridayThe13ths(1986)); // 1
