function logger() {
  console.log(new Date().toString());
}

var debounceLogger = debounce(logger, 10000);

function userEvent() {
  var interval = setInterval(debounceLogger, 100);

  setInterval(function () {
    clearInterval(interval);
  }, 5000);
}

userEvent();

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
