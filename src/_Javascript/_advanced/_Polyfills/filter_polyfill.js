/*
An example of this is the filter method, which accepts a function and returns an array containing only the values of the original array for which the function returns true.
*/
var isEven = function(n) {
  return n % 2 === 0;
};

if (typeof Array.prototype.myFilter !== 'function') {
  Array.prototype.myFilter = function(fn, thisp) {
    if (this === null) throw new TypeError();
    if (typeof fn !== 'function') throw new TypeError();

    var result = [];
    for (var i = 0; i < this.length; i++) {
      if (i in this) {
        var val = this[i];
        if (fn.call(thisp, val, i, this)) {
          result.push(val);
        }
      }
    }
    return result;
  };
}
var output = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].myFilter(isEven);

console.log(output);
