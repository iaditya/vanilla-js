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

const car_factory = new carFactory();

const autoManufacturer = (type, modal) => {
    switch (type) {
        case 'car':
            return car_factory.createCar(modal);
        case 'suv':
            return suv_factory.createFactory(modal);
    }
}


let carMixin =  {
    revEngine: function() {
        console.log(`The ${this.engine} is doine vrom - vrom`);
    }

}

Object.assign(Car.prototype, carMixin);

const civic = autoManufacturer('car', 'civic');

civic.revEngine();