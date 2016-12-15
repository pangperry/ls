var a = 'outer';

console.log(a); 
setScope(a); 
console.log(a);  

var setScope = function() {
  a = 'inner';
}
\\outer
\\Uncaught TypeError: setScope is not a function(…)
