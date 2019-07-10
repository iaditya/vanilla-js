// Decorator Pattern

//Example #1

var Task = function(name) {
    this.name = name;
    this.comp = false;
  }
  
  Task.prototype.complete = function() {
    console.log("completing " + this.name);
  }
  
  Task.prototype.save = function() {
    console.log("saving " + this.name);
  }
  
  // using decorator
  var urgent = new Task('urgent');
  urgent.preority = 2;
  
  urgent.notify = function () {
    console.log("notifying " + this.name);
  }
  
  urgent.save = function() {
    this.notify();
    Task.prototype.save.call(this);
  }
  
  urgent.save();

  // Example #2

  var Task = function(name) {
    this.name = name;
    this.comp = false;
  }
  
  Task.prototype.complete = function() {
    console.log("completing " + this.name);
  }
  
  Task.prototype.save = function() {
    console.log("saving " + this.name);
  }
  
  // using decorator (true sub class)
  function UrgentTask(name, preority) {
    Task.call(this, name);
    this.preority = preority;
  }
  
  UrgentTask.prototype = Object.create(Task.prototype);
  
  UrgentTask.prototype.notify = function() {
    console.log("notifying " + this.name);
  }
  
  UrgentTask.prototype.save = function() {
      this.notify();
    console.log("ur saving..");
    Task.prototype.save.call(this);
  }
  
  var t = new UrgentTask("sha", 4);
  console.log(t);
  t.save();


  


 


