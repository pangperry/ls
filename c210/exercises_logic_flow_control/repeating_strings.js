function repeat(string, times) {
  var repeated = '';

  if (times < 0 || isNaN(times)) {
    return undefined;
  }

  for (var i = 0; i < times; i++) {
    repeated += string;
  }

  return repeated;
}
