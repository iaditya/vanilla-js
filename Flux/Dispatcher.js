//Functions that respond to particular actions [js objects]

function Dispatcher() {
  this._callbacks = {};
  this._lastID = 0;
}

Dispatcher.prototype.register = function (callback) {
  var id = "CID_" + this._lastID++;
  this._callbacks[id] = callback;
  return id;
};

Dispatcher.prototype.dispatch = function (action) {
  for (var id in this._callbacks) {
    this._callbacks[id](action);
  }
};

module.exports = new Dispatcher();
