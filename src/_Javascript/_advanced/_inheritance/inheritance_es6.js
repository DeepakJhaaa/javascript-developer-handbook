/*
 * Inheritance in JavaScript using ES6 Features.
 * ES6 Support the Class in Javascript.
 * Using 'Extends', inheritance can be easily implemented.
 */

//=== Create a Class for the Car ===
class Car {
  constructor(options) {
    this.brand = options.brand;
    this.color = options.color;
    this.model = options.model;
  }
  //=== Add a method drive that return a msg ===
  drive() {
    var msg = "Mr. Driver is driving " + this.brand + " " + this.model;
    return msg;
  }
}

//=== Initialize a new car from above class ===
var etios = new Car({ brand: "Toyotoa", color: "Black", model: "Etios" });

//=== print method drive for the new car
console.log(etios.drive());
//=== log: "Mr. Driver is driving Toyotoa Etios"

//=== Create a class for Toyota car, that should extends Car properties ===
class Toyota extends Car {
  constructor(options) {
    super(options);
    this.type = options.type;
  }
  //=== segemet method return car segment info ===
  segment() {
    var output =
      this.brand + " " + this.model + " is in " + this.type + " segment.";
    return output;
  }
}

//=== Create a  new car from Tyotoa class that extends car properties ===
var fortuner = new Toyota({
  brand: "Toyotoa",
  color: "Black",
  model: "Fortuner",
  type: "luxury"
});

//=== drive method also exists for Tyota class extened from car ===
console.log(fortuner.drive());
//=== log:"Mr. Driver is driving Toyotoa Fortuner"

//=== segement method exists only to Toyota class
console.log(fortuner.segment());
//=== log: "Toyotoa Fortuner is in luxury segment."
