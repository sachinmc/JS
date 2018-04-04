function multiplesOfThreeAndFive() {
  var count;
  for (count =  1; count <= 100; count++) {
    if (count % 15 == 0) {
      console.log(String(count) + "!")
    } else if (count % 5 == 0 || count % 3 == 0) {
      console.log(String(count));
    }
  }
}

/* range of numbers as input */

function multiplesOfThreeAndFive(array) {
  var count;
  for (count =  array[0]; count <= array[1]; count++) {
    if (count % 15 == 0) {
      console.log(String(count) + "!")
    } else if (count % 5 == 0 || count % 3 == 0) {
      console.log(String(count));
    }
  }
}

multiplesOfThreeAndFive([1,100]);
multiplesOfThreeAndFive([1,50]);
