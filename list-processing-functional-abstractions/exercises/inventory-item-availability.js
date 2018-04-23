function isItemAvailable(item, transactions) {
  var stock = 0;
  return transactionsFor(item, transactions).every(function (inventory, idx, array) {
    if (inventory.movement === 'in') {
      stock += inventory.quantity;
    } else if (inventory.movement === 'out') {
      stock -= inventory.quantity;
    }

    // check stock is available and all inventory items have been checked
    return stock > 0 || idx < array.length - 1;
  });
}

function transactionsFor(inventoryItem, transactions) {
  return transactions.filter(function (inventory) {
    return inventory.id === inventoryItem;
  });
}

// another solution
function isItemAvailable(item, transactions) {
  var quantity = transactionsFor(item, transactions).reduce(function (sum, transaction) {
    if (transaction.movement === 'in') {
      return sum + transaction.quantity;
    } else {
      return sum - transaction.quantity;
    }
  }, 0);

  return quantity > 0;
}



var transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 15 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true
console.log(isItemAvailable(102, transactions));     // false
