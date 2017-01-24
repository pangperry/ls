//Uncaught ReferenceError: a is not defined
console.log(a);

function hello() {
    a = 1;
}


//works because a resolves to global variable and then it's value is logged
function hello() {
  a = 1;
}

hello();
console.log(a);
