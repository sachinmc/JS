function debounce(func, delay) {
  var timeout;

  return function() {
    var args = arguments; // this is an array hence we are using apply below
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(function() {
      func.apply(null, args); // null because no reference to a context within the function
    }, delay);
  };
}
