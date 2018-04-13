function searching() {
  var numberArr = [];
  var counter = 1;
  var lastNumber;

  while (counter <= 5) {
    numberArr[counter - 1] =
      parseInt(prompt('Enter the ' + String(counter) + suffix(counter) + ' number:'), 10);
    counter += 1;
  }

  lastNumber = parseInt(prompt('Enter the last number:'), 10);

  if (numberArr.indexOf(lastNumber) === -1) {
    text = 'does not appear in';
  } else {
    text = 'appears in';
  }

  //console.log(`The number ${lastNumber} ${text} ${buildArray(numberArr)}`);

  if (numberArr.some(isIncluded)) {
    return 'Number greater than 25 Found!';
  } else {
    return 'Number greater than 25 Not Found.';
  }
}

function suffix(counter) {
  switch (counter) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

function buildArray(numberArr) {
  return '[' + numberArr.join(', ') + ']';
}

function isIncluded(arr, val) {
  var i;

  for(i = 0; i < arr.length; i += 1) {
    if (arr[i] > val) {
      return true;
    }
  }

  return false;
}

function isIncluded(element) {
  return element > 25;
}
