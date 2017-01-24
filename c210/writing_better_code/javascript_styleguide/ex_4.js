function read(pages) {
  console.log('You started reading.');
  for (var i = 0; i < pages; i += 1) {
    var message = 'You read page ' + i;
    console.log(message);
  }
}

read(400);
