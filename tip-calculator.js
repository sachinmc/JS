function tip() {
  var bill;
  var tipPercent;
  var tipAmount;
  var total;

  bill = parseFloat(prompt('What is the bill?'), 10);
  tipPercent = parseFloat(prompt('What is the tip percentage?'), 10);

  tipAmount = bill * tipPercent/100;
  total = tipAmount + bill;

  console.log('The tip is $' + tipAmount.toFixed(2));
  console.log('The total is $' + total.toFixed(2));

}

tip();
