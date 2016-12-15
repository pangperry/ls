function hello() {
  a = 'hello';
  console.log(a);

  if (false) {
    var a = 'hello again';
  }
}

hello(); \\hello
console.log(a); \\Uncaught ReferenceError: a is not defined
