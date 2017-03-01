//input: an inventoryItem (i.e., an id number) and an array of objects (transactions), each with id, movement and quantity key value pairs
//output: boolean. true if sum of quantities for selected transactions > 0
//
//
//Use given InventoryItem number to select objects from the array with the 
//given transaction id
//
//iterate through this array of objects
//  at each iteration,
//      if the object movement == 'in'
//      add the quantity to returned total
//      if the object movement == 'out'
//      subtract the quantity from  returned total
//use reduce function and set equal to inventory
//
//if inventory > 0 return true, else return false
//


function isItemAvailable(inventoryItem, transactions) {
  var myTransactions = select(inventoryItem, transactions);

  var inventory =  myTransactions.reduce(function(total, transaction) {
    if (transaction.movement === 'in') {
      return total + transaction.quantity;
    } else if (transaction.movement === 'out') {
      return total - transaction.quantity;
    }
  },0);

  return inventory > 0 ? true : false;
}

function select(idNum, transactions) {
  return transactions.filter(function(item) {
    return item.id === idNum;
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

console.log(isItemAvailable(101, transactions)); //false
console.log(isItemAvailable(105, transactions)); //true
