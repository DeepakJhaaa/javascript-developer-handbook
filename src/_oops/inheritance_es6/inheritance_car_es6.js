/*
 Inheritance in JavaScript using ES6 Features.
 ES6 Support the Class in Javascript.
 Using 'Extends', inheritance can be easily implemented.
*/

// Create a Class for the Car
class Car {
    constructor(options) {
        this.brand = options.brand;
        this.color = options.color;
        this.model = options.model;
    }

    drive() {
        var output = "Deepak is driving " + this.brand + " " + this.model;
        return output;
    }
}

// Initialize Few Cars with the above properties
var camry = new Car({ brand: "Toyotoa", color: "Black", model: "Camry" });

// Add some properties specific to Toyota Cars
class Toyota extends Car {
    constructor(options) {
        super(options);
        this.type = options.type;
    }
    segment() {
        var output =
            this.brand + " " + this.model + " is in " + this.type + " car segment.";
        return output;
    }
}

// Create a  new Toyota cars with the unique properties
var fortuner = new Toyota({ brand: "Toyotoa", color: "Black", model: "Fortuner", type: "luxury" });
