// 01 - Constructor
var Task = function (name) {
  this.name = name;
  this.print = function () {
    console.log(this.name);
  }
}

// prototype
Task.prototype.print = function () {
  console.log(this.name);
}

// ES6
class Task2 {
  constructor(name) {
    this.name = name;
    this.valid = true;
  };
  isValid() {
    console.log(this.valid);
  }
}

var t = new Task2("ke");
console.log(t);



// Module 
//servieces in angularjs























