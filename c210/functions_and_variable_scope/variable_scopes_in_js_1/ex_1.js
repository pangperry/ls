var a = 'outer';

function testScope() {
    var a = 'inner';
      console.log(a);
}

console.log(a); \\ outer
testScope();    \\ inner
console.log(a); \\ outer

