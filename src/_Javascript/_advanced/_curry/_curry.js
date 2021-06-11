/*
 * Currying is a process of reducing a function which takes multiple arguments into a function
 * which takes only one argument at a time and returns another function which takes second
 * argument, third argument and so on until all arguments are exhausted.
 */

/*
 * The curried version of sum3 behaves a little differently. For starters, it accepts only one
 * argument and returns a function. The returned function also accepts one argument and also
 * returns a function.
 * This cycle keeps going until the returned function accepts the last argument. This function,
 * the last one in the chain, finally returns the sum.
 */

//=== Simple Summation with fixed number of arguments ===
function sum01(a, b, c) {
  return a + b + c;
}

var sum02 = (a, b, c) => a + b + c;

//=== Currying of the above functions ===
function currySum01(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
}

var currySum02 = (a) => (b) => (c) => a + b + c;

//=== Simple Multiplication with fixed number of arguments
function mul01(a, b, c) {
  return a * b * c;
}

var mul02 = (a, b, c) => a * b * c;

//=== Currying of the above functions ===
function curryMul01(x) {
  return function (y) {
    return function (z) {
      return x * y * z;
    };
  };
}

var curryMul02 = (a) => (b) => (c) => a * b * c;

//=== Generic Curry for fixed number of arguments ===
//=== Curry will convert normal function to currying ===

const infiniteCurry01 = function (fn) {
  const innerfn = function (n, args) {
    return function (...x) {
      if (n <= x.length) {
        return fn(...args, ...x);
      }
      return innerfn(n - x.length, [...args, ...x]);
    };
  };
  return innerfn(fn.length, []);
};

//=== Generic Curry with finite number of arguments - ES6 impelementation
const infiniteCurry02 = (fn) => {
  const innerFn = (N, args) => {
    console.log(N);
    return (...x) => {
      if (N <= x.length) {
        return fn(...args, ...x);
      }
      return innerFn(N - x.length, [...args, ...x]);
    };
  };
  return innerFn(fn.length, []);
};

//=== create infinite curry for sum function
const sum03 = infiniteCurry01(sum01);
console.log(sum03(2, 3)(4));
console.log(sum03(2)(3, 4));
console.log(sum03(2)(3)(4));

//=== create infinite urry for mul function
const mul03 = infiniteCurry01(mul01);
console.log(mul03(2, 3)(4));
console.log(mul03(2)(3, 4));
console.log(mul03(2)(3)(4));

//==== Infinite Sum ===
function infiniteSum04() {
  var args = [...arguments];
  var total = args.reduce((total, value) => total + value);
  return total;
}

console.log(infiniteSum04(1, 2, 3, 4));
console.log(infiniteSum04(1, 2, 3, 4, 5, 6));
console.log(infiniteSum04(1, 2, 3, 4, 5, 6, 7, 8));

//=== Infinite curry for sum
function infiniteCurrySum04() {
  var args = [...arguments];
  function innerfn() {
    var args1 = [...arguments];
    return infiniteCurrySum04(...args, ...args1);
  }
  let total = args.reduce((total, value) => total + value);
  innerfn.value = total;
  return innerfn;
}
