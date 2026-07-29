export class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.speed = 0;
    }
    accelerate() {
        // must use the this keyword to access the property
        this.speed++;
    }
}

let car = new Car("BMW", "5 series");
car.accelerate();
console.log("car.speed: " + car.speed);
    