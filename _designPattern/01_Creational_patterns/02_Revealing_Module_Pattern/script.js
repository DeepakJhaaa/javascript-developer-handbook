'Use Strict';

/**
 * A variable of Module Pattern is "Revealing Module Pattern". The purpose of
 * 'Revealing Module Pattern' is to maintain encapsulation and reveal certain
 * variable and methods returned in Object literal.
 */

/**
 * Let us look at a concrete example of implementation of Revealing Module patterns
 */
var revealingModuleExample = (function() {
  // declare private variable and functions and use them inside the scope only.
  var privateVariable = 10;

  var privateMethod = function() {
    privateVariable++;
    console.log('Inside the private Method : ' + privateVariable);
  };

  var methodToExpose = function() {
    console.log('This is the method I want to expose : ' + privateVariable);
  };

  var otherMethodToExpose = function() {
    privateMethod();
  };
  return {
    // declare public variable and functions that can be accesed from outside of module.
    publicVariable: privateVariable,
    firstMethod: methodToExpose,
    secondMethod: otherMethodToExpose
  };
})();

/**
 * Although this method looks much cleaner, an obvious distadvantage is unable to reference
 * the private variable and methods and this can also pose unit-testing challenges.
 */
