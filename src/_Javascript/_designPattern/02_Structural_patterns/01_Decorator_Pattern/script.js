'Use Strict';
/**
 * Definition
Attach additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.

Frequency of use (in JavaScript):medium high

Summary
The Decorator pattern extends (decorates) an object’s behavior dynamically. The ability to add new behavior at runtime is accomplished by a Decorator object which ‘wraps itself’ around the original object. Multiple decorators can add or override functionality to the original object.

An example of a decorator is security management where business objects are given additional access to privileged information depending on the privileges of the authenticated user. For example, an HR manager gets to work with an employee object that has appended (i.e. is decorated with) the employee's salary record so that salary information can be viewed.

Decorators provide flexibility to statically typed languages by allowing runtime changes as opposed to inheritance which takes place at compile time. JavaScript, however, is a dynamic language and the ability to extend an object at runtime is baked into the language itself.

For this reason, the Decorator pattern is less relevant to JavaScript developers. In JavaScript the Extend and Mixin patterns subsume the Decorator pattern. You can learn more about these and other Modern JavaScript patterns in our JavaScript + jQuery Design Pattern Framework.


Diagram
Diagram JavaScript Decorator Design Pattern

Participants
The objects participating in this pattern are:

Client -- In sample code: the run() function
maintains a reference to the decorated Component
Component -- In sample code: User
object to which additional functionality is added
Decorator -- In sample code: DecoratedUser
'wraps around' Component by maintaining a reference to it
defines an interface that conforms to Component's interface
implements the additional functionality (addedMembers in diagram)

Sample code in JavaScript
In the example code a User object is decorated (enhanced) by a DecoratedUser object. It extends the User with several address-based properties. The original interface must stay the same, which explains why user.name is assigned to this.name. Also, the say method of DecoratedUser hides the say method of User.

JavaScript itself is far more effective in dynamically extending objects with additional data and behavior. You can learn more about extending objects at runtime and other techniques in our JavaScript + jQuery Design Pattern Framework.

The log function is a helper which collects and displays results.
*/

var User = function(name) {
  this.name = name;

  this.say = function() {
    log.add('User: ' + this.name);
  };
};

var DecoratedUser = function(user, street, city) {
  this.user = user;
  this.name = user.name; // ensures interface stays the same
  this.street = street;
  this.city = city;

  this.say = function() {
    log.add(
      'Decorated User: ' + this.name + ', ' + this.street + ', ' + this.city
    );
  };
};

// logging helper

var log = (function() {
  var log = '';

  return {
    add: function(msg) {
      log += msg + '\n';
    },
    show: function() {
      alert(log);
      log = '';
    }
  };
})();

function run() {
  var user = new User('Kelly');
  user.say();

  var decorated = new DecoratedUser(user, 'Broadway', 'New York');
  decorated.say();

  log.show();
}
