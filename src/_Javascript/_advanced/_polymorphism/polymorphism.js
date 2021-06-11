/*
 * The polymorphism is a core concept of an object-oriented paradigm that provides
 * a way to perform a single action in different forms. It provides an ability to
 * call the same method on different JavaScript objects. As JavaScript is not a
 * type-safe language, we can pass any type of data members with the methods.
 */

/*
 * Polymorphism is one of the tenets of Object Oriented Programming (OOP). It is
 * the practice of designing objects to share behaviors and to be able to override
 * shared behaviors with specific ones. Polymorphism takes advantage of inheritance
 * in order to make this happen
 */

//=== Code goes here ===
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.getInfo = function () {
    return (
      "I am Person. My name is " + this.name + " And, My age is " + this.age
    );
  };
}

function Student(name, age, standard) {
  Person.call(this, name, age);
  this.standard = standard;
  this.getInfo = function () {
    return (
      "I am Student. My name is " +
      this.name +
      " I am studying in standard " +
      this.standard
    );
  };
}

function Teacher(name, age, salary) {
  Person.call(this, name, age);
  this.salary = salary;
  this.getInfo = function () {
    return (
      "I am Teacher. My name is " +
      this.name +
      " My Salary Per Month is " +
      this.salary
    );
  };
}

//Student.prototype = new Person();
//Student.prototype.constructor = Student;

function getDetails(obj) {
  alert(obj.getInfo());
}

var sachin = new Student("Sachin", 25, 5);
var saurabh = new Teacher("Saurabh", 35, 50000);

//getDetails(sachin);
//getDetails(saurabh);
