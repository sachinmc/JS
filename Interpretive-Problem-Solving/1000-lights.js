// input number of switches
// output array of numbers / lights that are on

// initially all lights are off
// loop for input length,
// round 1 toggle all lights by creating object and setting value to true
// round 2 toggle multiples of 2 lights
// round 3 toggle multiples of 3 lights
// round 4 toggle multiples of 4 lights
// round 5 toggle multiples of 5 lights

// create an array with size equal to the number of switches, whose values are
// initially set to false
// iterate through the array,
// if current value is false,
// set true values of array where index is a of index + 1, similarly
// set false values of array if current value is true
// after iteration return array indexes whose value is true.

// array.fill with false for length = switchs
// iterate through the array
// factor = index + 1;
// if index % factor === 0
// if array[index]
//  array[index] = false
// else
// array[index] = true
// array.map .. (index, array) if array[index] return array[index]
// return the transformed array

function lightsOn(switches) {
  var result = [];
  var array = [];
  var counter = 1;
  array.length = switches;
  array.fill(false, 0, switches);

  while (counter <= switches) {
    array.forEach(function (ele, index, array) {
      if ((index + 1) % counter === 0) {
        array[index] = !ele;
      }
    });

    counter += 1;
  }

  array.forEach(function (ele, index) {
    if (ele) {
      result.push(index + 1);
    }
  });

  return result;
}

// lightsOn(1); // [1]
console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
