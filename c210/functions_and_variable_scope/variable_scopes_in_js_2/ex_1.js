function say() {
  if (false) {
    var a = 'hello from inside a block';
  }

  console.log(a);
}

say();

\\after hoisting

function say() {
  var a;
  if (false) {
    a = 'hello from inside a block';
  }

  console.log(a);
}
say(); \\undefined
