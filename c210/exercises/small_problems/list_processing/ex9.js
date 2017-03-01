//input: a (id) number and na array of transaction objects. each object contains id, movement and quantity key value pairs
//output: array of transaction objects with the given id number
// filter the array, selecting the objects where obj[id] === the given id
//
// algo:
// filter transactions
// at each iteration, return transaction[id] === givenId;
// return transactions
//
function transactionsFor(idToFind, transactions) {
  return transactions.filter(function(transaction) {
    return transaction.id === idToFind;
  });
}

var transactions = [ {id: 101, movement: 'in', quantity: 5, },
                     {id: 105, movement: 'in', quantity: 10, },
                     {id: 102, movement: 'out', quantity: 17, },
                     {id: 101, movement: 'in', quantity: 12, },
                     {id: 103, movement: 'out', quantity: 15, },
                     {id: 102, movement: 'out', quantity: 15, },
                     {id: 105, movement: 'in', quantity: 25, },
                     {id: 101, movement: 'out', quantity: 18, },
                     {id: 102, movement: 'in', quantity: 22, },
                     {id: 103, movement: 'out', quantity: 15, },];

console.log(transactionsFor(101, transactions));
// result
// [ { id: 101, movement: 'in', quantity: 5 },
//   { id: 101, movement: 'in', quantity: 12 },
//     { id: 101, movement: 'out', quantity: 18 }, ]
