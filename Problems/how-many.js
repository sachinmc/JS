function countOccurrences(array) {
  var i;
  var property;
  var obj = {};

  for(i = 0; i < array.length; i += 1) {
    if(!obj[array[i]]) {
      obj[array[i]] = 0;
    }

    obj[array[i]] += 1;
  }

  for (property in obj) {
    console.log(property + ' => ' + obj[property]);
  }
}


var vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
car => 4
truck => 3
SUV => 1
motorcycle => 2
