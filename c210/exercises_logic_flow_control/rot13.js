function rot13(string) {
  var convertedString = ''; 

  for (var i = 0; i < string.length; i++) {
    convertedString += convert(string[i]);
  }

  return convertedString;
}

function convert(chr) {
  if (chr.match(/[a-z]/)) {
    return rot13Char(chr, 'lowercase');
  } else if (chr.match(/[A-Z]/)) {
    return rot13Char(chr, 'uppercase');
  } else {
    return chr;
  }
}

function rot13Char(letter, caseType) {
  var code = letter.charCodeAt(0);
  var newCode;

  if (caseType === 'lowercase' && code >= 110) {
    newCode =  110 - (122 - code) - 1;
  } else if (caseType === 'uppercase' && code >= 78) {
    newCode =  78 - (90 - code) - 1;
  } else {
    newCode = code + 13;
  }

  return String.fromCharCode(newCode);
}
