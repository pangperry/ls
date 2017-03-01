//input: three numbers
//output: string--letter score
//
//take three numbers
//get average
//return appropriate letter score accoring to these rules:
//90 <= score <= 100: 'A'
//80 <= score < 90: 'B'
//70 <= score < 80: 'C'
//60 <= score < 70: 'D'
//0 <= score < 60: 'F'
//
//length = arguments length
//convert arguments object to array
//get avg: reduce array and divide by length
//use switch to return grade 

function getGrade() {
  var length = arguments.length;
  var score = Array.prototype.slice.call(arguments).reduce(sum) / length;

  if (score >= 90) {
    return 'A';
  } else if (score >= 80) {
    return 'B';
  } else if (score >= 70) {
    return 'C';
  } else if (score >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

function sum(total, number) {
  return total + number;
}



console.log(getGrade(95, 90, 93)); //"A"
console.log(getGrade(50, 50, 95)) // "D"
