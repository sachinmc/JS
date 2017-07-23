var whoEatsWho = function(zoo) {

var animals = ["antelope eats grass",
"big-fish eats little-fish",
"bug eats leaves",
"bear eats big-fish",
"bear eats bug",
"bear eats chicken",
"bear eats cow",
"bear eats leaves",
"bear eats sheep",
"chicken eats bug",
"cow eats grass",
"fox eats chicken",
"fox eats sheep",
"giraffe eats leaves",
"lion eats antelope",
"lion eats cow",
"panda eats leaves",
"sheep eats grass"];

var input = zoo;
input = input.split(',');
var finalArray = [];

var str = "";

for(var i = 0; i < input.length; i++) {
  if(input[i-1] != undefined) {
    str = input[i] + " eats " + input[i-1];
    if (animals.indexOf(str) != -1) {
      finalArray.push(str);
      input.splice(i-1,1);
      i = -1;
      continue;
    }
  }

 if(input[i+1] != undefined) {
   str = input[i] + " eats " + input[i+1];
   if(animals.indexOf(str) != -1) {
     finalArray.push(str);
     input.splice(i+1,1);
     i = -1;
     continue;
    }
  }
}

finalArray.push(input.join());
finalArray.unshift(zoo);

return finalArray;
  
}