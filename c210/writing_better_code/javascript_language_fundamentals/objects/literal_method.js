var person = {
  firstName:  'Victor',
  lastName: function() {
              return 'Reyes';
            },
};

console.log(person.firstName + ' ' + person.lastName());
