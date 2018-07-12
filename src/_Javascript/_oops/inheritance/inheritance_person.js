// Create a Construction for the Person Object
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

// Initialize Few Persons with the above properties
var personOne = new Person("Deepak", 28, "Male");
var personTwo = new Person("Mili", 25, "Female");

// Add a method to the Person Constructor
// This method will be available to all the Object created from the constructor
Person.prototype.walk = function () {
    var output = this.name + ' is walking.';
    console.log(output);
    //return output;
}

// Call the Walk method for a specific Person Object
personOne.walk(); // Output "Deepak is walking."

// Create a Programmer Constructor, which should have all the method/properties of Person
function Programmer(name, age, gender, code) {
    Person.call(this, name, age, gender, code);
    this.code = code;
}

// Assign the Person.prototype to the Programmer.prototype
Programmer.prototype = Object.create(Person.prototype);
Programmer.prototype.constructor = Programmer;

// Assign the specific method only to Programmer. Not to the Person
Programmer.prototype.writeCode = function () {
    output = this.name + ' writes code in ' + this.code;
    console.log(output);
    //return output;
}

// Create an Instance of Programmer Object
var programmerOne = new Programmer("Rahul", 30, "Male", "JavaScript");

// Call the Write code method for the specific Programmer Object
programmerOne.writeCode();