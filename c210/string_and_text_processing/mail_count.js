var pattern = /\b[A-Z]{3,}\b/g;
var acronyms = {
  'KPI': "key performance indicators",
  'EOD': "the end of the day",
  'TBD': "to be decided",
  'WAH': "work at home",
  'IAM': "in a meeting",
  'OOO': "out of office",
  'NRN': "no reply necessary",
  'CTA': "call to action",
  'SWOT': "strengths, weaknesses, opportunities and threats",
}

function acronymBuster(string) {
  var result = string.slice();
  var acronymsList = string.match(pattern);
  var unknownAcronym;
  var values;

  values = acronymsList.map(function(letters) {
    return acronyms[letters];
  });

  unknownAcronym = values.indexOf(undefined); 

  if (unknownAcronym >= 0) {
    return acronymsList[unknownAcronym] + " is an acronym. I do not like acronyms. Please remove them from your email.";
  } else {
    acronymsList.forEach(function(word) {
      result = result.replace(word, acronyms[word]);
    });
  }

  result = result.split('.').map(function(section) {
     return section[0].toUpperCase() + section.slice(1);
  }).join('.');

}

function isAcronym(word) {
  return Boolean((word.length >= 3 && word == word.toUpperCase()));
}
//var text = "I am IAM so will be OOO until EOD" //"I am in a meeting so will be out of office until the end of the day");
//var text = "BRB I need to go into a KPIs meeting before EOP" // "BRB is an acronym. I do not like acronyms. Please remove them from your email.");
var text = "Going to WAH today. NRN. OOO" // "Going to work at home today. No reply necessary. Out of office");
console.log(acronymBuster(text));
