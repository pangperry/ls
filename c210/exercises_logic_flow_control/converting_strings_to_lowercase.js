function toLowerCase(string) {
  var CONVERSION_OFFSET = 32;
  var newString = '';
  var charCode;

  for (var i = 0; i < string.length; i++) {
    charCode = string.charCodeAt(i);

    if (string[i] >= 'A' && string[i] <= 'Z') {
      charCode += CONVERSION_OFFSET;
    }

    newString += String.fromCharCode(charCode);
  }

  return newString;
}
