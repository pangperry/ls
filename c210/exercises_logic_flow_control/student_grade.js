var score1 = parseInt(prompt('Enter score 1'), 10);
var score2 = parseInt(prompt('Enter score 2'), 10);
var score3 = parseInt(prompt('Enter score 3'), 10);

var average = (score1 + score2 + score3) / 3

var grade = 'F';
if (average >= 90) {
  grade = 'A';
} else if (average >= 70) {
  grade = 'B';
} else if (average >= 50) {
  grade = 'C';
}

console.log('Based on the average of your 3 scores your letter grade is ' +  grade);
