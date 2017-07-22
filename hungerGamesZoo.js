





//var animalEats = ["antelope eats grass", "big-fish eats little-fish", "bug eats leaves", bear eats big-fish, bear eats bug, bear eats chicken,
//bear eats cow, bear eats leaves, bear eats sheep, chicken eats bug, cow eats grass, fox eats chicken, fox eats sheep, giraffe eats leaves,
//lion eats antelope, lion eats cow, panda eats leaves, sheep eats grass"];

/*
antelope eats grass
big-fish eats little-fish
bug eats leaves
bear eats big-fish
bear eats bug
bear eats chicken
bear eats cow
bear eats leaves
bear eats sheep
chicken eats bug
cow eats grass
fox eats chicken
fox eats sheep
giraffe eats leaves
lion eats antelope
lion eats cow
panda eats leaves
sheep eats grass

var fox = {
  chicken: 'fox eats chicken',
  sheep: 'fox eats sheep'
};

var panda = {
  leaves: 'panda eats leaves'
}

var zooDisaster = {
  fox: {chicken: 'fox eats chicken', sheep: 'fox eats sheep'},
  panda: {leaves: 'panda eats leaves'}
}

*/

/*
iterate through input - for loop
check if obj to the left and right are properties of the calling object
if obj to the left/right is a property (e.g chicken)
  remove that obj from the input array
  return the value of that property to the final array (e.g 'fox eats chicken')
  move the search counter back to the start of the input (reset counter)
*/

var input = "fox,bug,chicken,grass,sheep";
input = input.split(',');
var finalArray = ["fox,bug,chicken,grass,sheep"];
var counter = 0;
/*
var fox = {
  chicken: 'fox eats chicken',
  sheep: 'fox eats sheep'
};

var bug = {};

var chicken = {
  bug: 'chicken eats bug'
};

var grass = {};

var sheep = {
  grass: 'sheep easts grass'
}
*/
var animals = {
  bug: {bug: {}},
  grass: {grass: {}},
  chicken: {chicken: {bug: 'chicken eats bug'}},
  sheep: {sheep: {grass: 'sheep eats grass'}},
  fox: {fox: {chicken: 'fox eats chicken', sheep: 'fox eats sheep'}}
}

var arr = input.map(function(element) {
  if (animals.hasOwnProperty(element))
    return animals[element];
});


arr.filter(function(element, index) {
  if (element.hasOwnProperty(Object.keys(element).shift()))
    return element[Object.keys(element).shift()];
});

[ { fox: { chicken: 'fox eats chicken', sheep: 'fox eats sheep' } },
  { bug: {} },
  { chicken: { bug: 'chicken eats bug' } },
  { grass: {} },
  { sheep: { grass: 'sheep eats grass' } } ]


/*
for(var i = 0; i < input.length; i++) {
  if(input[i-1] != undefined) {
    debugger;
    if (input[i].hasOwnProperty(input[i-1])) {
      finalArray.push(input[i][input[i-1]]);
      input.splice(i-1,1);
      i = -1;
    }
  } else if (input[i+1] != undefined) {
      debugger;
      if (input[i].hasOwnProperty(input[i+1])) {
        finalArray.push(input[i][input[i+1]]);
        input.splice(i+1,1);
        i = -1;
      }
  }
}

console.log(finalArray);
*/
