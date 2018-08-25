# Design Patterns in JavaScript

## 1. Creational Pattern

### 1.1 Module Pattern:

JavaScript `modules pattern` are the most prevalently used design patterns for keeping particular pieces of code independent of other components. This provides loose coupling to support well-structured code.

The Module Pattern is a Best Practice. Whether you are using Vanilla JavaScript, a library like jQuery or a Framework like React, chances are that you are already relying on the Module Pattern, whether consciously or not.

The core of today’s JavaScript technologies relies on Modules one way or another:

- Dependency Managers like NPM, Yarn and Bower.
- Build and Bundling Tools like Webpack, Browserify and Brunch.
- Task Runners Grunt and Gulp.

Modules are JavaScript `"classes"`. One of the many advantages of classes is encapsulation - protecting states and behaviors from being accessed from other classes. The module pattern allows for public and private (and the lesser known protected and privileged) access levels.

Modules should be Immediately-Invoked-Function-Expressions (IIFE) to allow for private scopes - that is, a closure that protect variables and methods (however, it will return an object instead of a function). This is what it looks like:

```js
(function() {
  // declare private variables and/or functions
  return {
    // declare public variables and/or functions
  };
})();
```

Here we instantiate the private variables and/or functions before returning our object that we want to return. Code outside of our closure is unable to access these private variables since it is not in the same scope. Let us take a more concrete implementation.

```js
var HTMLChanger = (function() {
  var contents = 'contents';
  var changeHTML = function() {
    var element = document.getElementById('attribute-to-change');
    element.innerHTML = contents;
  };
  return {
    callChangeHTML: function() {
      changeHTML();
      console.log(contents);
    }
  };
})();

HTMLChanger.callChangeHTML(); // Outputs: 'contents'
console.log(HTMLChanger.contents); // undefined
```

### 1.2 Revealing Module Pattern:

A variation of the module pattern is called the Revealing Module Pattern. The purpose is to maintain encapsulation and reveal certain variables and methods returned in an object literal. The direct implementation looks like this:

```js
var Exposer = (function() {
  var privateVariable = 10;
  var privateMethod = function() {
    console.log('Inside a private method!');
    privateVariable++;
  };
  var methodToExpose = function() {
    console.log('This is a method I want to expose!');
  };
  var otherMethodIWantToExpose = function() {
    privateMethod();
  };
  return {
    first: methodToExpose,
    second: otherMethodIWantToExpose
  };
})();

Exposer.first(); // Output: This is a method I want to expose!
Exposer.second(); // Output: Inside a private method!
Exposer.methodToExpose; // undefined
```

### 1.3 Singleton:

Although this looks much cleaner, an obvious disadvantage is unable to reference the private methods. This can pose unit testing challenges. Similarly, the public behaviors are non-over ridable.

A Singleton only allows for a single instantiation, but many instances of the same object. The Singleton restricts clients from creating multiple objects, after the first object created, it will return instances of itself.

In AngularJS, Singletons are prevalent, the most notable being services, factories, and providers. Since they maintain state and provides resource accessing, creating two instances defeats the point of a shared service/factory/provider.

Race conditions occur in multi-threaded applications when more than one thread tries to access the same resource. Singletons are susceptible to race conditions, such that if no instance were initialized first, two threads could then create two objects instead of returning and instance. This defeats the purpose of a singleton. Therefore, developers must be privy to synchronization when implementing singletons in multithreaded applications.

```js
var mySingleton = (function() {
  // Instance stores a reference to the Singleton
  var instance;

  function init() {
    // Singleton
    // Private methods and variables
    function privateMethod() {
      console.log('I am private');
    }

    var privateVariable = 'Im also private';
    var privateRandomNumber = Math.random();

    return {
      // Public methods and variables
      publicMethod: function() {
        console.log('The public can see me!');
      },

      publicProperty: 'I am also public',

      getRandomNumber: function() {
        return privateRandomNumber;
      }
    };
  }

  return {
    // Get the Singleton instance if one exists
    // or create one if it doesn't
    getInstance: function() {
      if (!instance) {
        instance = init();
      }

      return instance;
    }
  };
})();

var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();
console.log(singleA.getRandomNumber() === singleB.getRandomNumber()); // true
```

```js
var myBadSingleton = (function() {
  // Instance stores a reference to the Singleton
  var instance;

  function init() {
    // Singleton
    var privateRandomNumber = Math.random();

    return {
      getRandomNumber: function() {
        return privateRandomNumber;
      }
    };
  }

  return {
    // Always create a new Singleton instance
    getInstance: function() {
      instance = init();
      return instance;
    }
  };
})();

// Usage:

var badSingleA = myBadSingleton.getInstance();
var badSingleB = myBadSingleton.getInstance();
console.log(badSingleA.getRandomNumber() === badSingleB.getRandomNumber()); // false
console.log(badSingleA.getRandomNumber() !== badSingleB.getRandomNumber()); // true
```

**Note:** as we are working with random numbers, there is a mathematical possibility both numbers will be the same, however unlikely. The above example should otherwise still be valid.

## 2. Prototype Design Pattern

### 2.1 Decorator

The Decorator pattern extends (decorates) an object’s behavior dynamically. The ability to add new behavior at runtime is accomplished by a Decorator object which ‘wraps itself’ around the original object. Multiple decorators can add or override functionality to the original object. Decorators are a structural design pattern that aim to promote code re-use.

Decorators provide flexibility to statically typed languages by allowing runtime changes as opposed to inheritance which takes place at compile time. JavaScript, however, is a dynamic language and the ability to extend an object at runtime is baked into the language itself.

For this reason, the Decorator pattern is less relevant to JavaScript developers. In JavaScript the Extend and Mixin patterns subsume the Decorator pattern.

**The objects participating in this pattern are:**

- Client -- In sample code: the run() function
- maintains a reference to the decorated Component
- Component -- In sample code: User
- object to which additional functionality is added
- Decorator -- In sample code: DecoratedUser
- 'wraps around' Component by maintaining a reference to it
- defines an interface that conforms to Component's interface
- implements the additional functionality (addedMembers in diagram)

**Sample code in JavaScript:**

In the example code a User object is decorated (enhanced) by a DecoratedUser object. It extends the User with several address-based properties. The original interface must stay the same, which explains why user.name is assigned to this.name. Also, the say method of DecoratedUser hides the say method of User.

JavaScript itself is far more effective in dynamically extending objects with additional data and behavior. The log function is a helper which collects and displays results.

```js
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
```
