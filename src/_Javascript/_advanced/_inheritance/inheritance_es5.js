/*
* Below function Person is used as a constructor.
* If function used as constructor, it name start with capital letter
* Person have some properties and have a walk method
* Every person created from this constructor will have same properties and methods
*/
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.walk = function () {
    var msg = this.name + " can walk.";
    return msg;
  };
}

//=== create personOne from Person constructor
var personOne = new Person("Deepak", 30);
console.log(personOne.walk());

//=== Create a Teacher constructor, that should inherit from Person Constructor
//=== Teacher constructor have some extra method and properties
function Teacher(name, age, subject) {
  Person.call(this, name, age);
  this.subject = subject;
  this.about = function () {
    var msg = this.name + " teaches " + this.subject;
    return msg;
  };
}

//=== The Object.create() method creates a new object,
//=== using an existing object as the prototype of the newly created object.
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

//=== Create firstTeacher from the Teacher Constructor
var firstTeacher = new Teacher("Sumit", 34, "JavaScript");

console.log(firstTeacher.walk());
console.log(firstTeacher.about());
