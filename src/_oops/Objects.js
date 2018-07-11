// There are Different Method to Create Object in JavaScript

// 1. Literal Notation
var person = {
    name: "Deepak",
    age: 28,
    gender: "Male"
}

// 2. new Object() Construction
var person = new Object();
person.name = "Deepak";
person.age = 28;
person.gender = "Male";

// 3. Function Constructor With 'new' Keyword
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = age;
}
var personOne = new Person("Deepak", 28, "Male");

// 4. Singleton using a function
var person = new function () {
    this.name = "Deepak";
    this.age = 28;
    this.gender = "Male";
}