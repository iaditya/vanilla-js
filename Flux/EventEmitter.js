//Array of functions

function EventEmitter() {
  this.events = {};
  console.log("called");
}

EventEmitter.prototype.on = function (type, listener) {
  this.events[type] = this.events[type] || [];
  this.events[type].push(listener);
};

EventEmitter.prototype.emit = function (type) {
  if (this.events[type]) {
    this.events[type].forEach(function (listener) {
      listener();
    });
  }
};

EventEmitter.removeListener = function (type, listener) {
  if (this.events[type]) {
    this.events[type].splice(this.events[type].indexOf(listener), 1);
  }
};

module.exports = new EventEmitter();  //singleton obj
