var Task = function (name) {
    this.name = name;
    this.comp = false;
}

Task.prototype.complete = function () {
    console.log("completing " + this.name);
}

Task.prototype.save = function () {
    console.log("saving " + this.name);
}

var urgent = new Task('urgent');

urgent.notify = function () {
    console.log("notifying " + this.name);
}

urgent.save = function() {
    this.notify();
    Task.prototype.save.call(this);
}

urgent.save();