var myObject = { a: 1, b: 2, c: 3 };
Object.keys(myObject).forEach(function (key) {
  console.log('key: ' + key + ', ' + 'value: ' + myObject[key]);
});
// logs
// key: a, value: 1
// key: b, value: 2
// key: c, value: 3

// Working with keys or values as arrays
var keys = Object.keys(myObject);
var values = keys.map(function (key) {
  return myObject[key];
});

// map a new object with values doubled from myObject.
var obj = {};
Object.keys(myObject).forEach(function (key) {
  obj[key] = 2 * myObject[key];
});

// filter an object to select only values with even numbers.
var newObj = {};
Object.keys(myObject).forEach(function (key) {
  if (myObject[key] % 2 === 0) {
    newObj[key] = myObject[key];
  }
});

// reduce an invoice object
function getTotalFromInvoice(obj) {
  var values = Object.keys(obj).map(key => obj[key]);
  return values.reduce(function (total, current) {
    return total + current;
  });
}

getTotalFromInvoice({ phone: 10000, internet: 8000, tax: 3000 });

// reduce an invoice object
function getTotalFromInvoice(invoice) {
  var total = { total: 0 };
  Object.keys(invoice).forEach(function (key) {
    total.total += invoice[key]
  });

  return total;
}
