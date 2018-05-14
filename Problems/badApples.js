
//var input = [[1,3],[7,6],[7,2],[1,3],[4,5],[7,6]]; // - 1 rep
//var input = [[1,3],[7,6],[7,2],[1,3],[1,3],[4,5],[7,6]]; // - 3 rep, 2 adjacent
//var input = [[1,3],[7,6],[7,2],[0,0],[0,3],[1,3],[1,3],[4,5],[7,6]]; // - 2 bad packages (1 rotten) adjacent
//var input = [[1,3],[7,6],[7,2],[1,3],[0,0],[4,5],[0,3],[7,6]]; // - 2 bad packages (1 rotten) non adjacent
//var input = [[1,3],[7,6],[7,2],[1,3],[0,1],[4,5],[0,3],[7,6]]; // - 2 bad packages, replace becomes duplicate
//var input = [[1,3],[7,6],[7,2],[1,3],[0,2],[4,5],[0,3],[7,6]]; // - 2 bad packages, replace, different bad apple position
//var input = [[1,3],[7,6],[7,2],[1,3],[2,0],[4,5],[0,3],[7,6]]; // - 2 bad packages, replace,  different bad apple position
//var input = [[1,3],[7,6],[7,2],[1,3],[0,2],[4,5],[0,3],[7,6],[9,0]]; // - multiple bad packages, 1 can be replaced
//var input = [[1,3],[7,6],[7,2],[1,3],[0,2],[4,5],[0,3],[7,6],[1,1],[8,0],[4,3],[9,0],[0,5]]; // - multiple bad packages, 2 can be replaced
//var input = [[1,3],[7,6],[4,0],[7,2],[1,3],[0,2],[4,5],[0,3],[7,6],[9,0]]; // - multiple bad packages, all can be replaced
//var input = [[1,0],[4,0],[0,2],[7,0],[0,1]]; //all bad apples
//var input = [[0,0],[0,0],[0,],[0,0],[0,0]]; //all rotten apples
//var input = [[0,0],[1,3],[7,6],[7,2],[1,3],[0,0],[4,5],[0,3],[7,6]]; // - 1st element bad package
//var input =[[]] // empty box

//fruits to be repackaged with lower numbered fruit first
//a package can have the same fruits, no problem
//order of packages in the box to be maintained
//duplicate packages are fine

var input = [ [ 5, 5 ],[ 0, 6 ],[ 6, 0 ],[ 4, 2 ],[ 2, 7 ],[ 2, 4 ],[ 6, 7 ],[ 5, 6 ],[ 4, 2 ] ];

var inputIndex = [];
var fruitArray = [];
var badFruitloc = [];
var badPackage = {};
//first look for rotten packages
for(var i = 0; i < input.length; i++) {
  if (input[i].every(element => element === 0)) {
    input.splice(i,1);
    i -= 1;
  }
}

//find bad packages
for(var i = 0; i < input.length; i++) {
  if (input[i].some(element => element === 0)){
    badPackage[i] = input[i];
  }
}

//this is how badPackage object looks like
//> badPackage
//{ '4': [ 0, 2 ], '6': [ 0, 3 ], '8': [ 9, 0 ] }

//gather all the good fruits together
for (var fruit in badPackage) fruitArray = fruitArray.concat(badPackage[fruit]);
fruitArray = fruitArray.filter(x => x!=0);
//repackaging an even pair of fruits (inputIndex is the result)
if (fruitArray.length % 2 !=0) fruitArray.pop();
while (fruitArray.length > 0) inputIndex.push(fruitArray.splice(0,2));

badFruitloc = Object.keys(badPackage);
//updating fruit box with fresh fruit packages
for (var i = 0; i < badFruitloc.length; i++) {
  if (inputIndex[i] == undefined ) break;
  input[badFruitloc[i]] = inputIndex[i];
  badFruitloc.splice(i+1,1);
}

//final tidy up, removing residual bad packages
for(var i = 0; i < input.length; i++) {
  if (input[i].some(element => element === 0)){
    input.splice(i,1);
    i -= 1;
  }
}

console.log(input);


/*
Object.keys(badPackage).some(function(element, index) {
  return inputIndex[index] == undefined;
  input[element] = inputIndex[index];
});
*/
