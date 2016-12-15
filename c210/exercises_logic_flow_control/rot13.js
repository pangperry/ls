function rot13(string) {
  var convertedString = ''; 

  for (var i = 0; i < string.length; i++) {
    n = string.charCodeAt(i);
    if (n >= 97 && n <= 122) {
      convertedString += convertLowercase(string[i]);
    } else if (n >= 65 && n <= 90) {
      convertedString += convertUppercase(string[i]);
    } else {
      convertedString += string[i];
    }
  }

  return convertedString;
}

function convertUppercase(letter) {
  var code = letter.charCodeAt(0);
  var newCode;

  if (code >= 78) {
    newCode =  65 + 13 - (90 - code) - 1;
  }
  else {
    newCode = code + 13;
  }

  return String.fromCharCode(newCode);
}

function convertLowercase(letter) {
  var code = letter.charCodeAt(0);
  var newCode;

  if (code >= 110) {
    newCode =  97 + 13 - (122 - code) - 1;
  }
  else {
    newCode = code + 13;
  }

  return String.fromCharCode(newCode);
}
