class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}

class Suv extends Car {
    constructor(doors, engine, color) {
        super(doors, engine, color);
        this.wheels = 4;
    }
}


const civic = new Car(4, 'V6', 'red');
const suv = new Suv(4, 'V4', 'black');

console.log(civic);
console.log(suv);