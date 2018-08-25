// Simple Curry Function
function mul(a) {
  return function(b) {
    return function(c) {
      return a * b * c;
    };
  };
}
console.log(mul(2)(3)(4));

// Curry Wrapper
function curry(func) {
  return function(a) {
    return function(b) {
      return func(a, b);
    };
  };
}

// usage
function sum(a, b) {
  return a + b;
}

let carriedSum = curry(sum);

alert(carriedSum(1)(2)); // 3
// N-curry Wrapper
function curryN(fn) {
  if (fn.length === 0) {
    return fn;
  }
  const args = [];
  function nest(i) {
    return x => {
      args.push(x);
      if (i === fn.length) {
        return fn(...args);
      }
      return nest(i + 1);
    };
  }
  return nest(1);
}

const sum3 = curryN((x, y, z) => {
  return x + y + z;
});
const sum5 = curryN((a, b, c, d, e) => {
  return a + b + c + d + e;
});
console.log(sum3(1)(2)(3)); // 6
sum5(1)(2)(3)(4)(5); // 15
