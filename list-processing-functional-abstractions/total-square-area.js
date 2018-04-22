function totalArea(rectangles) {
  var areas = rectangles.map(function (rectangle) {
    return rectangle[0] * rectangle[1];
  });

  return areas.reduce((sum, current) => current + sum);
}

var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalArea(rectangles));    // 141

function totalSquareArea(rectangles) {
  var squares = rectangles.filter(function (rectangle) {
    return rectangle[0] === rectangle[1];
  });

  var areas = squares.map(function (square) {
    return square[0] * square[1];
  });

  return areas.reduce((sum, current) => current + sum);
}

console.log(totalSquareArea(rectangles));    // 121
