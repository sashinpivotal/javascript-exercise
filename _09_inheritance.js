import { Car } from './_08_class.js';

class SportsCar extends Car {
    constructor(make, model, turboBoost) {
        // call superclass constructor
        super(make, model);
        this.turboBoost = turboBoost;
    }
    // method overriding
    accelerate() {
        super.accelerate(); // call superclass method
        this.speed = this.speed * this.turboBoost;
    }
}
let sportsCar = new SportsCar("Maserati", "4200", 4);
sportsCar.accelerate();
console.log("sportsCar.speed: " + sportsCar.speed);