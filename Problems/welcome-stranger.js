function greetings(array, object) {
  var fullName = array.join(' ');
  var titleAndOccupation = [];

  for (property in object) {
    titleAndOccupation.push(object[property]);
  }

  titleAndOccupation = titleAndOccupation.join(' ');

  return `Hello, ${fullName}! Nice to have a ${titleAndOccupation} around.`
}

console.log(greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' }));
