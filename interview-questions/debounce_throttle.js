function logger() {
  console.log(new Date().toString());
}

var debounceLogger = debounce(logger, 1000);

function userEvent() {
  var interval = setInterval(logger, 100);

  setInterval(function () {
    clearInterval(interval);
  }, 2000);
}

//Debouncing
function debounce(fn, wait) {
  var timeout;

  var debounced = function () {
    var context = this,
      args = arguments;

    function later() {
      fn.call(context, args);
    }

    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
  return debounced;
}

//Throttling

function throttle(fn, wait) {
  var nextTick = false;

  var throttled = function () {
    var context = this,
      args = arguments;

    function later() {
      nextTick = false;
      fn.call(context, args);
    }

    if (!nextTick) {
      nextTick = setTimeout(later, wait);
    }
  };
  return throttled;
}

// will call the original function after 2 + 1 seconds.
userEvent();
