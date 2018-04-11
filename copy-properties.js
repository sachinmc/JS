function copyProperties(obj1, obj2) {

  // for in iterates over enumerable properties of an object.
  for (var name in obj1) {
    obj2[name] = obj1[name];
  }

  return Object.keys(obj2).length;
}

function copyProperties(obj1, obj2) {
  var counter = 0;
  var property;
  var obj2Keys = Object.keys(obj2);
  // for in iterates over enumerable properties of an object.
  for (property in obj1) {
    if (obj2Keys.indexOf(property) === -1) { // if the property doesn't exist.
      obj2[property] = obj1[property];
      counter += 1;
    }
  }

  return counter;
}


var hal = {
  model: 9000,
  enabled: true,
};

var sal = {};

console.log(copyProperties(hal, sal));
console.log(sal);
