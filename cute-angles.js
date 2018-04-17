function dms(deg) {
  var totalSeconds = (Math.round(deg * 1000) / 1000) * 60 * 60;
  var degrees;
  var minutes;
  var seconds;

  degrees = Math.floor(totalSeconds / 3600);
  //remaining seconds divided by 60 for number of minutes
  minutes = Math.floor((totalSeconds % 3600) / 60);
  seconds = Math.floor((totalSeconds % 3600) % 60);

  return `${String(degrees)}\u00b0${process(minutes)}'${process(seconds)}"`;
}

function process(number) {
  var numStr = String(number);
  return numStr.length < 2 ? '0' + numStr : numStr;
}

/*
console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59" //is this output correct?
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"
*/

//refactor to work with negative degrees also.
function dmsNeg(deg) {
  return deg < 0 ? dms(360 + deg) : dms(deg);
}

console.log(dmsNeg(-30));       // 330°00'00"
console.log(dmsNeg(-70.5));     // 289°30'00"

//tests for greater than 360
console.log(dmsNeg(-4000.4));   // 319°35'59"
console.log(dmsNeg(720));       // 360°00'00"
console.log(dmsNeg(1000));      // 280°00'00"
