/*
 * Memoization is an optimization technique that speeds up applications by storing the results
 * of expensive function calls and returning the cached result when the same inputs are
 * supplied again.
 */

/*
 * A cache is simply a temporary data store that holds data so that future requests for that
 * data can be served faster.
 */

/*
 * The concept of memoization in JavaScript is built majorly on two concepts.
 * They are: 1. Closures 2. Higher Order Functions(returning functions from functions)
 * Closures: A closure is the combination of a function and the lexical environment within
 * which that function was declared.
 * Higher Order Functions: Functions that operate on other functions, either by taking
 * them as arguments or by returning them, are called higher-order functions.
 */

//=== Case Study: The Fibonacci Sequence ===
//=== 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …
//=== 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …

//=== Solution: Knowing that each value is a sum of the previous two, a recursive solution to this problem will be:
function fibonacci(n) {
  if (n <= 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

//=== Implementation using Memoization
function fibonacciMemo(n, memo) {
  memo = memo || {};
  if (memo[n]) {
    return memo[n];
  }
  if (n <= 1) {
    return 1;
  }
  return (memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo));
}

//=== Generic Memoization Implementation ===
//=== In the code snippet below, we create a higher order function called memoizer. With this function, we will be able to easily apply memoization to any function.

function memoizer(fun) {
  let cache = {};
  return function (n) {
    if (cache[n] != undefined) {
      return cache[n];
    } else {
      let result = fun(n);
      cache[n] = result;
      return result;
    }
  };
}

const fibonacciMemofn = memoizer(fibonacci);

//=== Memoization for factorial ===
function factorial(x) {
  if (x === 0) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
}

const factorialMemofn = memoizer(factorial);
