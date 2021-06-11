/*
 * Closures: working example
 * In the below code value of count can be increase by the defined
 * method plus() only and count variable is not accessible globally.
 */
function increment01() {
  var count01 = 0;
  return function plus() {
    return count01++;
  };
}
var fn01 = increment01();

/*
 * Closures: working example - Self invocation function
 * In the below code value of count can be increase by the defined
 * method plus() only and count variable is not accessible globally.
 */
var fn02 = (function () {
  var count02 = 0;
  return function plus() {
    return count02++;
  };
})();

/*
 * Closures: working example - Self invocation function
 * In the below code value of count can be increase by the defined
 * To increment counter, call counterDemo.up()
 * To decrement counter, call counterDmeo.down()
 */

function counter() {
  var count = 0;
  function up() {
    return (count = count + 1);
  }
  function down() {
    return (count = count - 1);
  }
  return { up: up, down: down };
}
var counterDemo = counter();
