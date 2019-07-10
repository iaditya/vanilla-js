function Task(data) {
    this.name = data.name;
    this.priority = data.priority;
    this.completed = data.completed;
    this.user = data.user;
    this.project = data.project;
}

Task.prototype.complete = function() {
    console.log("completing Task:- " + this.name);
    this.completed = true;
}

Task.prototype.save = function() {
    console.log("saving Task:- " + this.name);
}

module.exports = Task;