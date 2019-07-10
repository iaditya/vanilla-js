// Used to restrict an object to one instance across the application.


var TaskRepo = function () {
    var taskRepo;

    function createRepo() {
        taskRepo = new Object("Adi");
        return taskRepo;
    }


    return {
        getInstance: function () {
            if (!taskRepo) {
                taskRepo = new createRepo();
            }
            return taskRepo;
        }
    }
}();

var t1 = TaskRepo.getInstance();
var t2 = TaskRepo.getInstance();

console.log(t1 === t2); //true






/*     ES6 version     */

let instance = null;

class Car {
    constructor(doors, engine, color) {
        if (!instance) {
            this.doors = doors;
            this.engine = engine;
            this.color = color;
            instance = this;
        } else {
            return instance;
        }
    }
}

const civic = new Car(4, 'V6', 'red');
const civic2 = new Car(3, 'V2', 'white');

console.log(civic);                     //{doors: 4, engine: "V6", color: "red"}
console.log(civic2);                    // {doors: 4, engine: "V6", color: "red"}
console.log(civic === civic2);          // true