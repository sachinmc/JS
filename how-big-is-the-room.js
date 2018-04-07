// implicit type convertions below, alternative, parseInt (best practice)
// console.log or alert
// Math.round() or number.toFixed()

function areaRoom() {
  var length;
  var width;
  var sqm;
  var sqft;

  length = prompt('Enter the length of the room in meters:');
  width = prompt('Enter the width of the room in meters:');

  sqm = length * width;
  sqft = Math.round(sqm * 10.7639 * 100)/100;
  alert(`The area of the room is ${sqm} square meters (${sqft} square feet).`);
}

areaRoom();
