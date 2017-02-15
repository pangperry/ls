function acronym(string) {
  return string.replace(/-/g, ' ').split(' ').map(function(word) {
    return word[0].toUpperCase();
  }).join(''); 

}


console.log(acronym('Complementary metal-oxide semiconductor'));
