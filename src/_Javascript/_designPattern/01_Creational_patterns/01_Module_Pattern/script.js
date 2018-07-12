'Use Strict';

/**
 * JavaScript "Module Pattern" is most prevalently used design pattern for keeping
 * particular piece of code independent of other component. This provides loose
 * coupling to support well-structured code.
 */

/**
 * Modules should be immediately-invoked function expression (IIFE) to allow for
 * private scope i.e. A closure that protects variables and methods. However, it
 * will return a object instead of a function.
 */

(function() {
  // declare private variable and functions and use them inside the scope only.

  return {
    // declare public variable and functions that can be accesed from outside of module.
  };
})();

/**
 * Let us look at a concrete example of implementation of Module patterns
 *
 */
var moduleExample = (function() {
  // declare private variable and functions and use them inside the scope only.
  var age = 21;
  function pvtFunction() {
    return `I am a boy and my age is ${age}`;
  }
  return {
    // declare public variable and functions that can be accesed from outside of module.
    doubleAge: age * 2,
    pubFunction: function() {
      return `I am a double boy and my age is ${this.doubleAge}`;
    },
    pvtFuncationAccess: function() {
      return pvtFunction();
    }
  };
})();

/**
 * Explanation: variable 'age' and function 'pvtFunction' is only accessible inside the module
 * and it cannot be accessed form the outside. But, variable 'doubleAge' and functions 'pubFunction'
 * and 'pvtFunctionAccess' can be accessed from the outside and these methods have the access of the 
 * private vaiable and methods of the module.
 */