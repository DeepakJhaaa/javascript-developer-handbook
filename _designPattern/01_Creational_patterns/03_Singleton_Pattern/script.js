'Use Strict';

/**
 * A singleton only allows for single instantiation, but many instances of the same Object.
 * The singleton restricts client from creating multiple object, after the first object
 * created. It will return instance of itself.
 */

/**
 * Race condition occurs in multi-threaded application when more than one thread tries to access
 * the same resource. Singletons are susceptible to race conditions, such that if no instance were
 * initialized first, two threads could then create two objects instead of returning and instance.
 * This defeats the purpose of a singleton. Therefore, developers must be privy to synchronization
 * when implementing singletons in multithreaded applications.
 */

/**
 * Let us look at a concrete example of implementation of Revealing Module patterns
 */

var singletonModulePattern = (function() {
  // 'instance' variable will store the reference to the singleton
  var instance;

  function init() {
    // singleton - private m{ethod and variable
    function privateMethod() {
      console.log('This is the private method.');
    }
    var privateVariable = "It's a private variable.";
    var privateRandomNumber = Math.random();

    return {
      // Public methods and variables
      publicMethod: function() {
        console.log('This can be accessed from outside.');
      },
      publicVariable: "It's a public variable.",

      getRandomNumber: function() {
        return privateRandomNumber;
      }
    };
  }

  return {
    // get the singleton instance if exists or create one if it doesn't
    getInstance: function() {
      if (!instance) {
        instance = init();
      }
      return instance;
    }
  };
})();

// Accessing the singleton instance of the module
var firstInstance = singletonModulePattern.getInstance();
var secondInstance = singletonModulePattern.getInstance();
