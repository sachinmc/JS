function objectHasProperty(obj, name) {
  return obj[name] === undefined ? false : true;
}

function objectHasProperty(object, propertyName) {
  var keys = Object.keys(object); // returns an array of property names
  return keys.indexOf(propertyName) !== -1;
}

var pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

console.log(objectHasProperty(pets, 'dog'));       // true
console.log(objectHasProperty(pets, 'lizard'));    // false
console.log(objectHasProperty(pets, 'mice'));      // true
