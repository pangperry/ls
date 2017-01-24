function processBands(bands) {
  return bands.map(function(band) {
    var capitalizedName = capitalizePhrase(band.name);
    var newBandName = removeDotsInString(capitalizedName);

    return {
      name: newBandName,
      country: 'Canada',
      active: band.active,
    };
  });
}

function capitalizePhrase(phrase) {
  var capitalizedPhrase = phrase.split(' ').map(function(word) {
    return capitalizeString(word);
  }).join(' ');
  return capitalizedPhrase;
}

function capitalizeString(string) {
  var initial = string[0].toUpperCase();
  var rest = string.slice(1, string.length);
  return initial + rest;
}

function removeDotsInString(string) {
  return string.replace(/\./g, '');
}

var bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

console.log(processBands(bands));
