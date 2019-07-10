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

class Suv {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}


class suvFactory {

    createFactory(type) {
        switch (type) {
            case 'cx5':
                return new Suv(4, 'V6', 'black');
            case 'crv':
                return new Suv(4, 'V2', 'black');
        }
    }
}

const car_factory = new carFactory();
const suv_factory = new suvFactory();

const autoManufacturer = (type, modal) => {
    switch (type) {
        case 'car':
            return car_factory.createCar(modal);
        case 'suv':
            return suv_factory.createFactory(modal);
    }
}

const cx5 = autoManufacturer('suv', 'cx5');

console.log(cx5);