function Person(name, age) {
  this.name = name;
  this.age = age;
  this.walk = function() {
    console.log(this.name + ' can walk.');
  };
}

function Teacher(name, age, subject) {
  Person.call(this, name, age);
  this.subject = subject;
  this.about = function() {
    console.log(this.name + ' taches ' + this.subject);
  };
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

var fistTeacher = new Teacher('Deepak', 28, 'JavaScript');
