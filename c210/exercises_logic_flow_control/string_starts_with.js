function startsWith(string, searchString) {
  for (var i = 0; i < searchString.length; i++) {
    if (string[i] !== searchString[i]) {
      return false;
    }
  }

  return true;
}

