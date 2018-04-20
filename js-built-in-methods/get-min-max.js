var max = -Infinity;
var min = Infinity;

var getMinMax = function (value) {
  if (value >= max) {
    max = value;
  }

  if(value <= min) {
    min = value;
  }
};

[4, 5, 12, 23, 3].forEach(getMinMax);

console.log(min, max);           // 3 23
