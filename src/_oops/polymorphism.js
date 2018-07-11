// Create Constructor for the Person with anme and age
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Add getInfo() method to the Person Object
Person.prototype.getInfo = function () {
    var output = "I am Person. My name is " + this.name + " And, My age is " + this.age;
    console.log(output);
    //return output
}
//============= WITH OUT Using Inheritance ======================// 
// Create Constructor for the Student with name, age and Subject
function Student(name, age, subject) {
    this.name = name;
    this.age = age;
    this.subject = subject;
}

// Add getInfo() method to the Student Object
Student.prototype.getInfo = function () {
    var output = "I am Student. My name is " + this.name + " I am studying " + this.subject;
    console.log(output);
    //return output
}

//============= WITH Using Inheritance ======================//
// Create the Constructor for Employee with name, age and Salary
function Employee(name, age, salary) {
    Person.call(this, name, age);
    this.salary = salary;
}

// Assign the Person Prototype to the Employee Prototype
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Now 'getInfo' method is already available to the Employee as inheritance. 

// Now overrides the 'getInfo' method for the Employee Object only
Employee.prototype.getInfo = function () {
    var output = "I am an Employee. My name is " + this.name + " My Salary is " + this.subject;
    console.log(output);
    //return output
}

// Create a Common Method to get the Details of Different types of Person
function getDetails(input) {
    console.log(input.getInfo());
}

// Create instance of Different type of Persons
var deepak = new Person("Deepak", 28);
var sachin = new Student('Sachin', 30, "Fifth");
var saurabh = new Employee('Saurabh', 35, 50000);

// Call the Common 'getDetails' method to show their info
getDetails(deepak);
getDetails(sachin);
getDetails(saurabh);