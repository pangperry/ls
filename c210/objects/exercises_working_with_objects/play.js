var friends = ['Joe', 'Mary', 'David'];

function removeElement(array, element) {
    for (var i = 0; i < array.length; i++) {
          if (array[i] === element) {
                  array.splice(i, 1);
                      }
            }
}

removeElement(friends, 'David');     // undefined
friends;                            // ["Joe", "Mary"]
