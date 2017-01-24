/*
function incrementProperty(object, propertyName) {
  if (object[propertyName]) {
    object.propertyName += 1; ***make note that this doesn't work
  } else {
    object[propertyName] = 1;
  }

  return object[propertyName];
}
*/
function incrementProperty(object, propertyName) {
  if (object[propertyName]) {
    object[propertyName] += 1;
  } else {
    object[propertyName] = 1;
  }

  return object[propertyName];
}






var wins = {
  steve: 3,
  susie: 4,
};
console.log(incrementProperty(wins, 'susie'));   // 5
console.log(wins);                               // { steve: 3, susie: 5 }
console.log(incrementProperty(wins, 'lucy'));    // 1
console.log(wins);                               // { steve: 3, susie: 5, lucy: 1 }
