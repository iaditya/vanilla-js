//simplify the object creation    //creating different objects based on need

class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}


class carFactory {

    createCar(type) {
        switch (type) {
            case 'civic':
                return new Car(4, 'V6', 'black');
            case 'honda':
                return new Car(4, 'V2', 'black');
        }
    }
}

const factory = new carFactory();
console.log(factory.createCar('honda'));


// other way to implement factory pattern

var RepoFactory = function() {

    this.getRepo = function(type) {
        if(type === 'en') {
            var enRepo = require('./enRepo')();
            return enRepo;
        }
        if(type === 'es') {
            var esRepo = require('./esRepo')();
            return esRepo;
        }
    }
}
module.exports = new RepoFactory;