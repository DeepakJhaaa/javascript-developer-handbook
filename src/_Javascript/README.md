js-questions
- [1. Variable and Types](#1-variable-and-types)
  - [1.1. What's the difference between a variable that is: `null`, `undefined` or undeclared? How would you go about checking for any of these states?](#11-whats-the-difference-between-a-variable-that-is-null-undefined-or-undeclared-how-would-you-go-about-checking-for-any-of-these-states)
  - [1.2. What will the code below output? Explain your answer.](#12-what-will-the-code-below-output-explain-your-answer)
  - [1.3. What is NaN? What is its type? How can you reliably test if a value is equal to NaN?](#13-what-is-nan-what-is-its-type-how-can-you-reliably-test-if-a-value-is-equal-to-nan)
  - [1.4. Discuss possible ways to write a function `isInteger(x)` that determines if x is an integer.](#14-discuss-possible-ways-to-write-a-function-isintegerx-that-determines-if-x-is-an-integer)
  - [1.5. Mathematical Operations in javascript](#15-mathematical-operations-in-javascript)
  - [1.6. typeof Operator in javascript](#16-typeof-operator-in-javascript)
  - [1.7. Explain "hoisting".](#17-explain-hoisting)
  - [1.8. What is the difference between `==` and `===`?](#18-what-is-the-difference-between--and-)
- [2. Functions](#2-functions)
  - [2.1. What are the difference way of declaring function in javascript?](#21-what-are-the-difference-way-of-declaring-function-in-javascript)
  - [2.2. Explain why the following doesn't work as an IIFE: `function foo(){ }();`. What needs to be changed to properly make it an IIFE?](#22-explain-why-the-following-doesnt-work-as-an-iife-function-foo--what-needs-to-be-changed-to-properly-make-it-an-iife)
  - [2.4. What is the definition of a higher-order function?](#24-what-is-the-definition-of-a-higher-order-function)
  - [2.6. Write a sum method which will work properly when invoked using either syntax below.](#26-write-a-sum-method-which-will-work-properly-when-invoked-using-either-syntax-below)
  - [2.7. The following recursive code will cause a stack overflow if the array list is too large. How can you fix this and still retain the recursive pattern?](#27-the-following-recursive-code-will-cause-a-stack-overflow-if-the-array-list-is-too-large-how-can-you-fix-this-and-still-retain-the-recursive-pattern)
  - [2.8. Consider the two functions below. Will they both return the same thing? Why or why not?](#28-consider-the-two-functions-below-will-they-both-return-the-same-thing-why-or-why-not)
  - [2.9. Write a simple function that returns a boolean indicating whether or not a string is a palindrome?](#29-write-a-simple-function-that-returns-a-boolean-indicating-whether-or-not-a-string-is-a-palindrome)
  - [2.10. What is the difference between a method and a function in JavaScript?](#210-what-is-the-difference-between-a-method-and-a-function-in-javascript)
  - [2.11. What is curry function in javascript and why this syntax offers an advantage?](#211-what-is-curry-function-in-javascript-and-why-this-syntax-offers-an-advantage)
- [3. Array](#3-array)
  - [3.1. How do you add an element at the beginning of an array? How do you add one at the end?](#31-how-do-you-add-an-element-at-the-beginning-of-an-array-how-do-you-add-one-at-the-end)
  - [3.2. What will the code below output to the console and why?](#32-what-will-the-code-below-output-to-the-console-and-why)
  - [3.3. Imagine you have this code](#33-imagine-you-have-this-code)
  - [3.4. Can you describe the main difference between a `.forEach` loop and a `.map()` loop and why you would pick one versus the other?](#34-can-you-describe-the-main-difference-between-a-foreach-loop-and-a-map-loop-and-why-you-would-pick-one-versus-the-other)
- [4. Object](#4-object)
  - [4.1. What are the way by which we can create object in JavaScript?](#41-what-are-the-way-by-which-we-can-create-object-in-javascript)
  - [4.2. What is the output out of the following code? Explain your answer.](#42-what-is-the-output-out-of-the-following-code-explain-your-answer)
  - [4.3. Assuming d is an “empty” object in scope, say:](#43-assuming-d-is-an-empty-object-in-scope-say)
  - [4.4. How do you clone an object?](#44-how-do-you-clone-an-object)
  - [4.5. What is a potential pitfall with using typeof bar === "object" to determine if bar is an object? How can this pitfall be avoided?](#45-what-is-a-potential-pitfall-with-using-typeof-bar--object-to-determine-if-bar-is-an-object-how-can-this-pitfall-be-avoided)
  - [4.6. How we can prevent modification of object in JavaScript?](#46-how-we-can-prevent-modification-of-object-in-javascript)
  - [4.7. Write a function called deepClone which takes an object and creates an object copy of it.](#47-write-a-function-called-deepclone-which-takes-an-object-and-creates-an-object-copy-of-it)
  - [4.8. Write code for merge two JavaScript Object dynamically.](#48-write-code-for-merge-two-javascript-object-dynamically)
  - [4.9. What will the code below output to the console and why?](#49-what-will-the-code-below-output-to-the-console-and-why)
  - [4.10. What's the difference between host objects and native objects?](#410-whats-the-difference-between-host-objects-and-native-objects)
  - [4.11. What is non-enumerable property in JavaScript and how can create?](#411-what-is-non-enumerable-property-in-javascript-and-how-can-create)
- [5. Scope](#5-scope)
  - [5.1. Explain why the following doesn't work as an IIFE?](#51-explain-why-the-following-doesnt-work-as-an-iife)
  - [5.2. What is JavaScript Self-Invoking anonymous function or Self-Executing anonymous function?](#52-what-is-javascript-self-invoking-anonymous-function-or-self-executing-anonymous-function)
  - [5.3. What is the significance of, and reason for, wrapping the entire content of a JavaScript source file in a function block?](#53-what-is-the-significance-of-and-reason-for-wrapping-the-entire-content-of-a-javascript-source-file-in-a-function-block)
  - [5.4. What is the drawback of creating true private in JavaScript?](#54-what-is-the-drawback-of-creating-true-private-in-javascript)
  - [5.5. What will this code print?](#55-what-will-this-code-print)
  - [5.6. What will the following code output and why?](#56-what-will-the-following-code-output-and-why)
  - [5.7. What will be the output of the following code](#57-what-will-be-the-output-of-the-following-code)
  - [5.8. In what order will the numbers 1-4 be logged to the console when the code below is executed? Why?](#58-in-what-order-will-the-numbers-1-4-be-logged-to-the-console-when-the-code-below-is-executed-why)
  - [5.9. Explain how `this` works in JavaScript](#59-explain-how-this-works-in-javascript)
  - [5.10. Explain how this works in JavaScript](#510-explain-how-this-works-in-javascript)
  - [5.11. What is a closure, and how/why would you use one?](#511-what-is-a-closure-and-howwhy-would-you-use-one)
  - [5.12. What is a “closure” in JavaScript? Provide an example.](#512-what-is-a-closure-in-javascript-provide-an-example)
  - [5.13. What's the difference between `.call` and `.apply`?](#513-whats-the-difference-between-call-and-apply)
  - [5.14. Explain `Function.prototype.bind`.](#514-explain-functionprototypebind)
  - [5.15. Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it?](#515-why-is-it-in-general-a-good-idea-to-leave-the-global-scope-of-a-website-as-is-and-never-touch-it)
  - [5.16. What is “closure” in JavaScript? Provide an example?](#516-what-is-closure-in-javascript-provide-an-example)
- [6. Inheritance](#6-inheritance)
  - [6.1. Explain how prototypal inheritance works](#61-explain-how-prototypal-inheritance-works)
  - [6.2. Modify `console.log()` method and add more property to default JavaScript methods?](#62-modify-consolelog-method-and-add-more-property-to-default-javascript-methods)
- [7. Callback, Async & Promise](#7-callback-async--promise)
  - [7.1. Explain Ajax in as much detail as possible.](#71-explain-ajax-in-as-much-detail-as-possible)
  - [7.2. What are the advantages and disadvantages of using Ajax?](#72-what-are-the-advantages-and-disadvantages-of-using-ajax)
  - [7.3. Explain how JSONP works (and how it's not really Ajax).](#73-explain-how-jsonp-works-and-how-its-not-really-ajax)
  - [7.4. Why is extending built-in JavaScript objects not a good idea?](#74-why-is-extending-built-in-javascript-objects-not-a-good-idea)
  - [7.5. What is the extent of your experience with Promises and/or their polyfills?](#75-what-is-the-extent-of-your-experience-with-promises-andor-their-polyfills)
  - [7.6. What are the pros and cons of using Promises instead of callbacks?](#76-what-are-the-pros-and-cons-of-using-promises-instead-of-callbacks)
  - [7.7. Explain the difference between synchronous and asynchronous functions.](#77-explain-the-difference-between-synchronous-and-asynchronous-functions)
  - [7.8. How to wait until multiple GET requests are successfully processed?](#78-how-to-wait-until-multiple-get-requests-are-successfully-processed)
  - [7.9. Explain the difference between synchronous and asynchronous functions.](#79-explain-the-difference-between-synchronous-and-asynchronous-functions)
  - [7.10. Cancel previous Http/Ajax request?](#710-cancel-previous-httpajax-request)
- [8. DOM Methods](#8-dom-methods)
  - [8.1. When would you use `document.write()`?](#81-when-would-you-use-documentwrite)
  - [8.2. Difference between document `load` event and document `DOMContentLoaded` event?](#82-difference-between-document-load-event-and-document-domcontentloaded-event)
  - [8.3. Why would you use something like the `load` event? Does this event have disadvantages? Do you know any alternatives, and why would you use those?](#83-why-would-you-use-something-like-the-load-event-does-this-event-have-disadvantages-do-you-know-any-alternatives-and-why-would-you-use-those)
- [9. ES6](#9-es6)
  - [9.1. Can you give an example for destructuring an object or an array?](#91-can-you-give-an-example-for-destructuring-an-object-or-an-array)
  - [9.2. What are the benefits of using spread syntax and how is it different from rest syntax?](#92-what-are-the-benefits-of-using-spread-syntax-and-how-is-it-different-from-rest-syntax)
  - [9.3. What are the differences between ES6 class and ES5 function constructors?](#93-what-are-the-differences-between-es6-class-and-es5-function-constructors)
  - [9.4. What are the differences between variables created using `let`, `var` or `const`?](#94-what-are-the-differences-between-variables-created-using-let-var-or-const)
- [10. Others](#10-others)
  - [10.1. Explain event delegation](#101-explain-event-delegation)
  - [10.2. What do you think of AMD vs CommonJS?](#102-what-do-you-think-of-amd-vs-commonjs)
  - [10.3. How do you organize your code? (module pattern, classical inheritance?)](#103-how-do-you-organize-your-code-module-pattern-classical-inheritance)
  - [10.4. What's the difference between feature detection, feature inference, and using the UA string?](#104-whats-the-difference-between-feature-detection-feature-inference-and-using-the-ua-string)
  - [10.5. Have you ever used JavaScript templating? If so, what libraries have you used?](#105-have-you-ever-used-javascript-templating-if-so-what-libraries-have-you-used)
  - [10.6. Describe event bubbling.](#106-describe-event-bubbling)
  - [10.7. What's the difference between an "attribute" and a "property"?](#107-whats-the-difference-between-an-attribute-and-a-property)
  - [10.8. Explain the same-origin policy with regards to JavaScript.](#108-explain-the-same-origin-policy-with-regards-to-javascript)
  - [10.9. Make this work:](#109-make-this-work)
  - [10.10. Why is it called a Ternary expression, what does the word "Ternary" indicate?](#1010-why-is-it-called-a-ternary-expression-what-does-the-word-ternary-indicate)
  - [10.11. What is `"use strict";`? What are the advantages and disadvantages to using it?](#1011-what-is-use-strict-what-are-the-advantages-and-disadvantages-to-using-it)
  - [10.12. Create a for loop that iterates up to `100` while outputting **"fizz"** at multiples of `3`, **"buzz"** at multiples of `5` and **"fizzbuzz"** at multiples of `3` and `5`.](#1012-create-a-for-loop-that-iterates-up-to-100-while-outputting-fizz-at-multiples-of-3-buzz-at-multiples-of-5-and-fizzbuzz-at-multiples-of-3-and-5)
  - [10.13. Explain what a single page app is and how to make one SEO-friendly.](#1013-explain-what-a-single-page-app-is-and-how-to-make-one-seo-friendly)
  - [10.14. What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?](#1014-what-are-some-of-the-advantagesdisadvantages-of-writing-javascript-code-in-a-language-that-compiles-to-javascript)
  - [10.15. What language constructions do you use for iterating over object properties and array items?](#1015-what-language-constructions-do-you-use-for-iterating-over-object-properties-and-array-items)
  - [10.16. What is event loop? What is the difference between call stack and task queue?](#1016-what-is-event-loop-what-is-the-difference-between-call-stack-and-task-queue)
  - [10.17. How can you share code between files ?](#1017-how-can-you-share-code-between-files-)
  - [10.18. Why you might want to create static class members?](#1018-why-you-might-want-to-create-static-class-members)
  - [10.19. Other Answers](#1019-other-answers)
  - [10.20. What will the following code output to the console:](#1020-what-will-the-following-code-output-to-the-console)
  - [10.21. Consider the code snippet below. What will the console output be and why?](#1021-consider-the-code-snippet-below-what-will-the-console-output-be-and-why)
  - [10.22. What will the following code output to the console and why:](#1022-what-will-the-following-code-output-to-the-console-and-why)
  - [10.23. Create a function for the below problem:](#1023-create-a-function-for-the-below-problem)
  - [10.24. What is the output of the following code?](#1024-what-is-the-output-of-the-following-code)
  - [10.25. Consider the following code. What will the output be, and why?](#1025-consider-the-following-code-what-will-the-output-be-and-why)
  - [10.26. What will be the output of this code?](#1026-what-will-be-the-output-of-this-code)
  - [10.27. Consider the following code snippet:](#1027-consider-the-following-code-snippet)
  - [10.28. What will be output of the below code:](#1028-what-will-be-output-of-the-below-code)
  - [10.29. Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5.](#1029-create-a-for-loop-that-iterates-up-to-100-while-outputting-fizz-at-multiples-of-3-buzz-at-multiples-of-5-and-fizzbuzz-at-multiples-of-3-and-5)
  - [10.30. What will be the output of the following code?](#1030-what-will-be-the-output-of-the-following-code)
  - [10.31. What will be the output of the following code?](#1031-what-will-be-the-output-of-the-following-code)
  - [10.32. What is the significance, and what are the benefits, of including 'use strict' at the beginning of a JavaScript source file?](#1032-what-is-the-significance-and-what-are-the-benefits-of-including-use-strict-at-the-beginning-of-a-javascript-source-file)
  - [10.33. Explain event delegation:](#1033-explain-event-delegation)

## 1. Variable and Types

### 1.1. What's the difference between a variable that is: `null`, `undefined` or undeclared? How would you go about checking for any of these states?

**Undeclared** variables are created when you assign a value to an identifier that is not previously created using `var`, `let` or `const`. Undeclared variables will be defined globally, outside of the current scope. In strict mode, a `ReferenceError` will be thrown when you try to assign to an undeclared variable. Undeclared variables are bad just like how global variables are bad. Avoid them at all cost! To check for them, wrap its usage in a `try`/`catch` block.

```js
function foo() {
  x = 1; // Throws a ReferenceError in strict mode
}

foo();
console.log(x); // 1
```

A variable that is `undefined` is a variable that has been declared, but not assigned a value. It is of type `undefined`. If a function does not return any value as the result of executing it is assigned to a variable, the variable also has the value of `undefined`. To check for it, compare using the strict equality (`===`) operator or `typeof` which will give the `'undefined'` string. Note that you should not be using the abstract equality operator to check, as it will also return `true` if the value is `null`.

```js
var foo;
console.log(foo); // undefined
console.log(foo === undefined); // true
console.log(typeof foo === 'undefined'); // true

console.log(foo == null); // true. Wrong, don't use this to check!

function bar() {}
var baz = bar();
console.log(baz); // undefined
```

A variable that is `null` will have been explicitly assigned to the `null` value. It represents no value and is different from `undefined` in the sense that it has been explicitly assigned. To check for `null,` simply compare using the strict equality operator. Note that like the above, you should not be using the abstract equality operator (`==`) to check, as it will also return `true` if the value is `undefined`.

```js
var foo = null;
console.log(foo === null); // true
console.log(typeof foo === 'object'); // true

console.log(foo == undefined); // true. Wrong, don't use this to check!
```

As a personal habit, I never leave my variables undeclared or unassigned. I will explicitly assign `null` to them after declaring if I don't intend to use it yet. If you use a linter in your workflow, it will usually also be able to check that you are not referencing undeclared variables.

**References:**

- https://stackoverflow.com/questions/15985875/effect-of-declared-and-undeclared-variables
- https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/undefined

[[↑] Back to top](#js-questions)

### 1.2. What will the code below output? Explain your answer.

```js
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);
```

**Ans:**

- An educated answer to this question would simply be: “You can’t be sure. It might print out 0.3 and true, or it might not.
- Numbers in JavaScript are all treated with floating point precision, and as such, may not always yield the expected results.”
- The example provided above is classic case that demonstrates this issue. Surprisingly, it will print out:

```js
0.30000000000000004;
false;
```

A typical solution is to compare the absolute difference between two numbers with the special constant `Number.EPSILON`:

```js
function areTheNumbersAlmostEqual(num1, num2) {
  return Math.abs(num1 - num2) < Number.EPSILON;
}
console.log(areTheNumbersAlmostEqual(0.1 + 0.2, 0.3));
```
### 1.3. What is NaN? What is its type? How can you reliably test if a value is equal to NaN?

- The NaN property represents a value that is “not a number”.
- This special value results from an operation that could not be performed either because one of the operands was non-numeric (e.g., "abc" / 4), or because the result of the operation is non-numeric.
- While this seems straightforward enough, there are a couple of somewhat surprising characteristics of NaN that can result in hair-pulling bugs if one is not aware of them.

For one thing, although NaN means “not a number”, its type is, believe it or not, Number:

```js
console.log(typeof NaN === 'number'); // logs "true"
```

Additionally, `NaN` compared to anything – even itself! – is false:

```js
console.log(NaN === NaN); // logs "false"
```

- A semi-reliable way to test whether a number is equal to NaN is with the built-in function isNaN(), but even using isNaN() is an imperfect solution.
- A better solution would either be to use value !== value, which would only produce true if the value is equal to NaN.
- Also, ES6 offers a new Number.isNaN() function, which is a different and more reliable than the old global isNaN() function.

### 1.4. Discuss possible ways to write a function `isInteger(x)` that determines if x is an integer.

- This may sound trivial and, in fact, it is trivial with ECMAScript 6 which introduces a new `Number.isInteger()` function for precisely this purpose.
- However, prior to ECMAScript 6, this is a bit more complicated, since no equivalent of the Number.isInteger() method is provided.
- The issue is that, in the ECMAScript specification, integers only exist conceptually; i.e., numeric values are always stored as floating point values.
- With that in mind, the simplest and cleanest pre-ECMAScript-6 solution (which is also sufficiently robust to return false even if a non-numeric value such as a string or null is passed to the function) would be the following use of the bitwise XOR operator:

```js
function isInteger(x) {
  return (x ^ 0) === x;
}
```

The following solution would also work, although not as elegant as the one above:

```js
function isInteger(x) {
  return Math.round(x) === x;
}
```

Note: that Math.ceil() or Math.floor() could be used equally well (instead of Math.round()) in the above implementation. OR, alternatively:

```js
function isInteger(x) {
  return typeof x === 'number' && x % 1 === 0;
}
```

One fairly common incorrect solution is the following:

```js
function isInteger(x) {
  return parseInt(x, 10) === x;
}
```

- While this parseInt based approach will work well for many values of x, once x becomes quite large, it will fail to work properly.
- The problem is that parseInt() coerces its first parameter to a string before parsing digits. Therefore, once the number becomes sufficiently large, its string representation will be presented in exponential form (e.g., 1e+21).
- Accordingly, parseInt() will then try to parse 1e+21, but will stop parsing when it reaches the e character and will therefore return a value of 1. Observe:

```js
> String(1000000000000000000000)
> '1e+21'
> parseInt(1000000000000000000000, 10)
> 1
> parseInt(1000000000000000000000, 10) === 1000000000000000000000
> false
```

### 1.5. Mathematical Operations in javascript

**What will the code below output to the console and why ?**

```js
console.log(1 + '2' + '2');
console.log(1 + +'2' + '2');
console.log(1 + -'1' + '2');
console.log(+'1' + '1' + '2');
console.log('A' - 'B' + '2');
console.log('A' - 'B' + 2);
```

**Ans:** The above code will output the following to the console:

```js
'122';
'32';
'02';
'112';
'NaN2';
NaN;
```

Here’s why…

- The fundamental issue here is that JavaScript (ECMAScript) is a loosely typed language and it performs automatic type conversion on values to accommodate the operation being performed. Let’s see how this plays out with each of the above examples.

**Example 1:**

`1 + "2" + "2" Outputs: "122"`

Explanation: The first operation to be performed in 1 + "2". Since one of the operands ("2") is a string, JavaScript assumes it needs to perform string concatenation and therefore converts the type of 1 to "1", 1 + "2"yields "12".
Then, "12" + "2" yields "122".

**Example 2:**

1 + +"2" + "2" Outputs: "32"

Explanation: Based on order of operations, the first operation to be performed is +"2" (the extra + before the first "2" is treated as a unary operator). Thus, JavaScript converts the type of "2" to numeric and then applies the unary + sign to it (i.e., treats it as a positive number). As a result, the next operation is now 1 + 2 which of course yields 3.
But then, we have an operation between a number and a string (i.e., 3 and "2"), so once again JavaScript converts the type of the numeric value to a string and performs string concatenation, yielding "32".

**Example 3:**

1 + -"1" + "2" Outputs: "02"

Explanation: The explanation here is identical to the prior example, except the unary operator is - rather than +. So "1" becomes 1, which then becomes -1 when the - is applied, which is then added to 1yielding 0, which is then converted to a string and concatenated with the final "2" operand, yielding "02".

**Example 4:**

+"1" + "1" + "2" Outputs: "112"

Explanation: Although the first "1" operand is typecast to a numeric

value based on the unary + operator that precedes it, it is then immediately converted back to a string when it is concatenated with the second "1"operand, which is then concatenated with the final "2" operand, yielding the string "112".

**Example 5:**

"A" - "B" + "2" Outputs: "NaN2"

Explanation: Since the - operator cannot be applied to strings, and since neither "A"nor "B" can be converted to numeric values, "A" - "B" yields NaN which is then concatenated with the string "2" to yield “NaN2”.

**Example 6:**

"A" - "B" + 2 Outputs: NaN

Explanation: As explained in the previous example, "A" - "B" yields NaN. But any operator applied to NaN with any other numeric operand will still yield NaN.


**What would the following lines of code output to the console?**

```js
console.log('0 || 1 = ' + (0 || 1));
console.log('1 || 2 = ' + (1 || 2));
console.log('0 && 1 = ' + (0 && 1));
console.log('1 && 2 = ' + (1 && 2));
```

Explain your answer.

**Ans**: The code will output the following four lines:

```js
0 || 1 = 1
1 || 2 = 1
0 && 1 = 0
1 && 2 = 2
```

- In JavaScript, both || and && are logical operators that return the first fully-determined “logical value” when evaluated from left to right.
- The or (||) operator. In an expression of the form X||Y, X is first evaluated and interpreted as a boolean value.
- If this boolean value is true, then true (1) is returned and Y is not evaluated, since the “or” condition has already been satisfied.
- If this Boolean value is “false”, though, we still don’t know if X||Y is true or false until we evaluate Y, and interpret it as a boolean value as well.
- Accordingly, 0 || 1 evaluates to true (1), as does 1 || 2.
- The and (&&) operator. In an expression of the form X&&Y, X is first evaluated and interpreted as a boolean value.
- If this boolean value is false, then false (0) is returned and Y is not evaluated, since the “and” condition has already failed.
- If this boolean value is “true”, though, we still don’t know if X&&Y is true or false until we evaluate Y, and interpret it as a boolean value as well.
- However, the interesting thing with the && operator is that when an expression is evaluated as “true”, then the expression itself is returned.
- This is fine, since it counts as “true” in logical expressions, but also can be used to return that value when you care to do so.
- This explains why, somewhat surprisingly, 1 && 2 returns 2 (whereas you might it expect it to return true or 1).

**What do the following lines output, and why?**

```js
console.log(1 < 2 < 3);
console.log(3 > 2 > 1);
```

**Ans:**

The first statement returns true which is as expected.

- The second returns false because of how the engine works regarding operator associativity for < and >.
- It compares left to right, so 3 > 2 > 1 JavaScript translates to true > 1. true has value 1, so it then compares 1 > 1, which is false.

**What will be the output of the following code?**

```js
var bar = true;
console.log(bar + 0); // Output 1
console.log(bar + 'xyz'); // truexyz
console.log(bar + true); // 2
console.log(bar + false); // 1
```

- Number + Number -> Addition
- Boolean + Number -> Addition
- Number + String -> Concatenation
- String + Boolean -> Concatenation
- String + String -> Concatenation

### 1.6. typeof Operator in javascript

**What is the value of typeof `undefined == typeof NULL`?**

The expression will be evaluated to true, since NULL will be treated as any other undefined variable.

Note: JavaScript is case-sensitive and here we are using NULL instead of null.

**What would following code return?**

```js
console.log(typeof typeof 1);
// Ans:
string;

// typeof 1 will return "number" and typeof "number" will return string.
```

**What will be the output of the following code?**

```js
var z = 1,
  y = (z = typeof y);
console.log(y);
```

Above code will output `undefined` as output.

- According to associativity rule operator with the same precedence are processed based on their associativity property of operator.

- Here associativity of the assignment operator is Right to Left so first typeof y will evaluate first which is undefined and assigned to z and then y would be assigned the value of z and then z would be assign value 1.

### 1.7. Explain "hoisting".

Hoisting is a term used to explain the behavior of variable declarations in your code. Variables declared or initialized with the `var` keyword will have their declaration "moved" up to the top of the current scope, which we refer to as hoisting. However, only the declaration is hoisted, the assignment (if there is one), will stay where it is.

Note that the declaration is not actually moved - the JavaScript engine parses the declarations during compilation and becomes aware of declarations and their scopes. It is just easier to understand this behavior by visualizing the declarations as being hoisted to the top of their scope. Let's explain with a few examples.

```js
// var declarations are hoisted.
console.log(foo); // undefined
var foo = 1;
console.log(foo); // 1

// let/const declarations are NOT hoisted.
console.log(bar); // ReferenceError: bar is not defined
let bar = 2;
console.log(bar); // 2
```

Function declarations have the body hoisted while the function expressions (written in the form of variable declarations) only has the variable declaration hoisted.

```js
// Function Declaration
console.log(foo); // [Function: foo]
foo(); // 'FOOOOO'
function foo() {
  console.log('FOOOOO');
}
console.log(foo); // [Function: foo]

// Function Expression
console.log(bar); // undefined
bar(); // Uncaught TypeError: bar is not a function
var bar = function() {
  console.log('BARRRR');
};
console.log(bar); // [Function: bar]
```

**What will be the output of the following code?**

```js
var salary = '1000$';

(function() {
  console.log('Original salary was ' + salary);

  var salary = '5000$';

  console.log('My New Salary ' + salary);
})();
```

Above code will output: `undefined, 5000$`.

- JavaScript has hoisting concept where newbie gets tricked. In above code, you might be expecting salary to retain it values from outer scope until the point that salary was re-declared in the inner scope.

- But due to hoisting salary value was undefined instead. To understand it better have a look of the following code, here salary variable is hoisted and declared at the top in function scope and while doing `console.log()` it's result undefined and after that it's been re-declared and assigned 5000$.

```js
var salary = '1000$';

(function() {
  var salary = undefined;
  console.log('Original salary was ' + salary);

  salary = '5000$';

  console.log('My New Salary ' + salary);
})();
```

### 1.8. What is the difference between `==` and `===`?

`==` is the abstract equality operator while `===` is the strict equality operator. The `==` operator will compare for equality after doing any necessary type conversions. The `===` operator will not do type conversion, so if two values are not the same type `===` will simply return `false`. When using `==`, funky things can happen, such as:

```js
1 == '1'; // true
1 == [1]; // true
1 == true; // true
0 == ''; // true
0 == '0'; // true
0 == false; // true
```

My advice is never to use the `==` operator, except for convenience when comparing against `null` or `undefined`, where `a == null` will return `true` if `a` is `null` or `undefined`.

```js
var a = null;
console.log(a == null); // true
console.log(a == undefined); // true
```

**What will be the output when the following code is executed? Explain.**

```js
console.log(false == '0'); // true
console.log(false === '0'); // false
```

- In JavaScript, there are two sets of equality operators.
- The triple-equal operator === behaves like any traditional equality operator would: evaluates to true if the two expressions on either of its sides have the same type and the same value.
- The double-equal operator, however, tries to coerce the values before comparing them.
- It is therefore generally good practice to use the === rather than ==.
- The same holds true for !== vs !=.

## 2. Functions

### 2.1. What are the difference way of declaring function in javascript?

```js
var foo = function() {
  // Some code
};

function bar() {
  // Some code
}
```

The main difference is function foo is defined at run-time whereas function bar is defined at parse time. For understanding it in better way let see below code:

```js
// Run-Time function declaration
foo(); // Call foo function here, It will give an error
var foo = function() {
  console.log('Hi I am inside Foo');
};

// Parse-Time function declaration

bar(); // Call bar function here, It will not give an Error
function bar() {
  console.log('Hi I am inside Foo');
}
```

Another advantage of first-one way of declaration that you can declare function based on certain condition for example:

```js
<script>
if(testCondition) { // If testCondition is true then
  function foo() {
    console.log("inside Foo with testCondition True value");
  };
 } else {
  function foo() {
    console.log("inside Foo with testCondition false value");
  };
 }
 </script>
```

But if you try to run similar code in the following format, it would give an error

```js
if (testCondition) {
  // If testCondition is true then
  var foo = function() {
    console.log('inside Foo with testCondition True value');
  };
} else {
  var foo = function() {
    console.log('inside Foo with testCondition false value');
  };
}
```

**Difference between: `function Person(){}`, `var person = Person()`, and `var person = new Person()`?**

This question is pretty vague. My best guess at its intention is that it is asking about constructors in JavaScript. Technically speaking, `function Person(){}` is just a normal function declaration. The convention is to use PascalCase for functions that are intended to be used as constructors.

`var person = Person()` invokes the `Person` as a function, and not as a constructor. Invoking as such is a common mistake if it the function is intended to be used as a constructor. Typically, the constructor does not return anything, hence invoking the constructor like a normal function will return `undefined` and that gets assigned to the variable intended as the instance.

`var person = new Person()` creates an instance of the `Person` object using the `new` operator, which inherits from `Person.prototype`. An alternative would be to use `Object.create`, such as: `Object.create(Person.prototype)`.

```js
function Person(name) {
  this.name = name;
}

var person = Person('John');
console.log(person); // undefined
console.log(person.name); // Uncaught TypeError: Cannot read property 'name' of undefined

var person = new Person('John');
console.log(person); // Person { name: "John" }
console.log(person.name); // "john"
```

**Explain the differences on the usage of `foo` between `function foo() {}` and `var foo = function() {}`**

The former is a function declaration while the latter is a function expression. The key difference is that function declarations have its body hoisted but the bodies of function expressions are not (they have the same hoisting behavior as variables). For more explanation on hoisting, refer to the question above on hoisting. If you try to invoke a function expression before it is defined, you will get an `Uncaught TypeError: XXX is not a function` error.

**Function Declaration**

```js
foo(); // 'FOOOOO'
function foo() {
  console.log('FOOOOO');
}
```

**Function Expression**

```js
foo(); // Uncaught TypeError: foo is not a function
var foo = function() {
  console.log('FOOOOO');
};
```

[[↑] Back to top](#js-questions)

### 2.2. Explain why the following doesn't work as an IIFE: `function foo(){ }();`. What needs to be changed to properly make it an IIFE?

IIFE stands for Immediately Invoked Function Expressions. The JavaScript parser reads `function foo(){ }();` as `function foo(){ }` and `();`, where the former is a function declaration and the latter (a pair of brackets) is an attempt at calling a function but there is no name specified, hence it throws `Uncaught SyntaxError: Unexpected token )`.

Here are two ways to fix it that involves adding more brackets: `(function foo(){ })()` and `(function foo(){ }())`. These functions are not exposed in the global scope and you can even omit its name if you do not need to reference itself within the body.

You might also use `void` operator: `void function foo(){ }();`. Unfortunately, there is one issue with such approach. The evaluation of given expression is always `undefined`, so if your IIFE function returns anything, you can't use it. An example:

```
// Don't add JS syntax to this code block to prevent Prettier from formatting it.
const foo = void function bar() { return 'foo'; }();

console.log(foo); // undefined
```

**What's a typical use case for anonymous functions?**

They can be used in IIFEs to encapsulate some code within a local scope so that variables declared in it do not leak to the global scope.

```js
(function() {
  // Some code here.
})();
```

As a callback that is used once and does not need to be used anywhere else. The code will seem more self-contained and readable when handlers are defined right inside the code calling them, rather than having to search elsewhere to find the function body.

```js
setTimeout(function() {
  console.log('Hello world!');
}, 1000);
```

Arguments to functional programming constructs or Lodash (similar to callbacks).

```js
const arr = [1, 2, 3];
const double = arr.map(function(el) {
  return el * 2;
});
console.log(double); // [2, 4, 6]
```

[[↑] Back to top](#js-questions)

### 2.4. What is the definition of a higher-order function?

A higher-order function is any function that takes one or more functions as arguments, which it uses to operate on some data, and/or returns a function as a result. Higher-order functions are meant to abstract some operation that is performed repeatedly. The classic example of this is `map`, which takes an array and a function as arguments. `map` then uses this function to transform each item in the array, returning a new array with the transformed data. Other popular examples in JavaScript are `forEach`, `filter`, and `reduce`. A higher-order function doesn't just need to be manipulating arrays as there are many use cases for returning a function from another function. `Function.prototype.bind` is one such example in JavaScript.

**Map**

Let say we have an array of names which we need to transform each string to uppercase.

```js
const names = ['irish', 'daisy', 'anna'];
```

The imperative way will be as such:

```js
const transformNamesToUppercase = function(names) {
  const results = [];
  for (let i = 0; i < names.length; i++) {
    results.push(names[i].toUpperCase());
  }
  return results;
};
transformNamesToUppercase(names); // ['IRISH', 'DAISY', 'ANNA']
```

Use `.map(transformerFn)` makes the code shorter and more declarative.

```js
const transformNamesToUppercase = function(names) {
  return names.map(name => name.toUpperCase());
};
transformNamesToUppercase(names); // ['IRISH', 'DAISY', 'ANNA']
```

Here mul function accept the first argument and return anonymous function which take the second parameter and return anonymous function which take the third parameter and return multiplication of arguments which is being passed in successive.

### 2.6. Write a sum method which will work properly when invoked using either syntax below.

```js
console.log(sum(2, 3)); // Outputs 5
console.log(sum(2)(3)); // Outputs 5
```

**Ans:**

There are (at least) two ways to do this:

**METHOD 1**

```js
function sum(x) {
  if (arguments.length == 2) {
    return arguments[0] + arguments[1];
  } else {
    return function(y) {
      return x + y;
    };
  }
}
```

- In JavaScript, functions provide access to an arguments object which provides access to the actual arguments passed to a function. This enables us to use the length property to determine at runtime the number of arguments passed to the function.
- If two arguments are passed, we simply add them together and return.
- Otherwise, we assume it was called in the form sum(2)(3), so we return an anonymous function that adds together the argument passed to sum() (in this case 2) and the argument passed to the anonymous function (in this case 3).

METHOD 2:

```js
function sum(x, y) {
  if (y !== undefined) {
    return x + y;
  } else {
    return function(y) {
      return x + y;
    };
  }
}
```

- When a function is invoked, JavaScript does not require the number of arguments to match the number of arguments in the function definition.
- If the number of arguments passed exceeds the number of arguments in the function definition, the excess arguments will simply be ignored.
- On the other hand, if the number of arguments passed is less than the number of arguments in the function definition, the missing arguments will have a value of undefined when referenced within the function.
- So, in the above example, by simply checking if the 2nd argument is undefined, we can determine which way the function was invoked and proceed accordingly.

### 2.7. The following recursive code will cause a stack overflow if the array list is too large. How can you fix this and still retain the recursive pattern?

```js
var list = readHugeList();

var nextListItem = function() {
  var item = list.pop();

  if (item) {
    // process the list item...
    nextListItem();
  }
};
```

**Ans:**

The potential stack overflow can be avoided by modifying the nextListItem function as follows:

```js
var list = readHugeList();

var nextListItem = function() {
  var item = list.pop();

  if (item) {
    // process the list item...
    setTimeout(nextListItem, 0);
  }
};
```

- The stack overflow is eliminated because the event loop handles the recursion, not the call stack.
- When nextListItem runs, if item is not null, the timeout function (nextListItem) is pushed to the event queue and the function exits, thereby leaving the call stack clear.
- When the event queue runs its timed-out event, the next item is processed and a timer is set to again invoke nextListItem.
- Accordingly, the method is processed from start to finish without a direct recursive call, so the call stack remains clear, regardless of the number of iterations.



### 2.8. Consider the two functions below. Will they both return the same thing? Why or why not?

```js
function foo1() {
  return {
    bar: 'hello',
  };
}

function foo2() {
  return;
  {
    bar: 'hello';
  }
}
```

**Ans:**

Surprisingly, these two functions will not return the same thing. Rather:

```js
console.log("foo1 returns:");
console.log(foo1());
console.log("foo2 returns:");
console.log(foo2());

//will yield:

// foo1 returns:
Object {bar: "hello"}
// foo2 returns:
undefined
```

- Not only is this surprising, but what makes this particularly gnarly is that `foo2()` returns `undefined` without any error being thrown.

* The reason for this has to do with the fact that semicolons are technically optional in JavaScript (although omitting them is generally really bad form).

* As a result, when the line containing the return statement (with nothing else on the line) is encountered in foo2(), a semicolon is automatically inserted immediately after the return statement.

- No error is thrown since the remainder of the code is perfectly valid, even though it doesn’t ever get invoked or do anything (it is simply an unused code block that defines a property bar which is equal to the string "hello").

- This behavior also argues for following the convention of placing an opening curly brace at the end of a line in JavaScript, rather than on the beginning of a new line. As shown here, this becomes more than just a stylistic preference in JavaScript.

### 2.9. Write a simple function that returns a boolean indicating whether or not a string is a palindrome?

The following one line function will return true if str is a palindrome; otherwise, it returns false.

```js
function isPalindrome(str) {
  str = str.replace(/\W/g, '').toLowerCase();
  return (
    str ==
    str
      .split('')
      .reverse()
      .join('')
  );
}

// for example:
console.log(isPalindrome('level')); // logs 'true'
console.log(isPalindrome('levels')); // logs 'false'
console.log(isPalindrome('A car, a man, a maraca')); // logs 'true'
```


### 2.10. What is the difference between a method and a function in JavaScript?

A function is a piece of code that is called by name and function itself not associated with any object and not defined inside any object. It can be passed data to operate on (i.e. parameter) and can optionally return data (the return value).

```js
// Function definition
function myFunc() {
  // Do some stuff;
}

// Calling function
myFunc();
```

Here myFunc() function call is not associated with object hence not invoked through any object.

A function can be self-invoking anonymous function or named self-invoking function

```js
// Named Self-invoking Function
(function myFunc() {
  // Do some stuff;
})();

// Anonymous Self-invoking Function
(function() {
  // Do some stuff;
})();
```

In a case of named self-invoking anonymous function or anonymous self-invoking function, there is no need of call function explicitly.

- A method is a piece of code that is called by name and that is associated with the object. In most respects it is identical to function call except for some key difference:
- It is implicitly passed for the object for which it was called.
- It is able to operate on data that is contained within the class (remembering that an object is an instance of a class- the class is the definition, the object is an instance of that)
- Method call is always associated with object

```js
var methodObject = {
  attribute: 'xyz',
  display: function() {
    // Method
    console.log(this.attribute);
  },
};

// Call method
methodObject.display();
```

Here methodObject is an object and display is a method which is associated with methodObject.


### 2.11. What is curry function in javascript and why this syntax offers an advantage?

Currying is a pattern where a function with more than one parameter is broken into multiple functions that, when called in series, will accumulate all of the required parameters one at a time. This technique can be useful for making code written in a functional style easier to read and compose. It's important to note that for a function to be curried, it needs to start out as one function, then broken out into a sequence of functions that each accepts one parameter.

```js
function curry(fn) {
  if (fn.length === 0) {
    return fn;
  }

  function _curried(depth, args) {
    return function(newArgument) {
      if (depth - 1 === 0) {
        return fn(...args, newArgument);
      }
      return _curried(depth - 1, [...args, newArgument]);
    };
  }

  return _curried(fn.length, []);
}

function add(a, b) {
  return a + b;
}

var curriedAdd = curry(add);
var addFive = curriedAdd(5);

var result = [0, 1, 2, 3, 4, 5].map(addFive); // [5, 6, 7, 8, 9, 10]
```


[[↑] Back to top](#js-questions)


## 3. Array

### 3.1. How do you add an element at the beginning of an array? How do you add one at the end?

```js
var myArray = ['a', 'b', 'c', 'd'];

myArray.push('end');
myArray.unshift('start');

console.log(myArray); // ["start", "a", "b", "c", "d", "end"]

//With ES6, one can use the spread operator:
myArray = ['start', ...myArray];
myArray = [...myArray, 'end'];

// Or, in short:
myArray = ['start', ...myArray, 'end'];
```

### 3.2. What will the code below output to the console and why?

```js
var arr1 = 'john'.split('');
var arr2 = arr1.reverse();
var arr3 = 'jones'.split('');
arr2.push(arr3);
console.log('array 1: length=' + arr1.length + ' last=' + arr1.slice(-1));
console.log('array 2: length=' + arr2.length + ' last=' + arr2.slice(-1));
```

**Ans:** The logged output will be:

```js
'array 1: length=5 last=j,o,n,e,s';
'array 2: length=5 last=j,o,n,e,s';
```

`arr1` and `arr2` are the same (i.e. ['n','h','o','j', ['j','o','n','e','s'] ]) after the above code is executed for the following reasons:

- Calling an array object’s reverse() method doesn’t only return the array in reverse order, it also reverses the order of the array itself (i.e., in this case, arr1).
- The reverse() method returns a reference to the array itself (i.e., in this case, arr1).
- As a result, arr2 is simply a reference to (rather than a copy of) arr1. Therefore, when anything is done to arr2 (i.e., when we invoke arr2.push(arr3)), arr1 will be affected as well since arr1 and arr2 are simply references to the same object.
- And a couple of side points here that can sometimes trip someone up in answering this question:
- Passing an array to the push() method of another array pushes that entire array as a single element onto the end of the array.
- As a result, the statement arr2.push(arr3); adds arr3 in its entirety as a single element to the end of arr2 (i.e., it does notconcatenate the two arrays, that’s what the concat() method is for).
- Like Python, JavaScript honors negative subscripts in calls to array methods like slice() as a way of referencing elements at the end of the array; e.g., a subscript of -1 indicates the last element in the array, and so on.

**Write a mul function which will invoked as below syntax.**

```js
console.log(mul(2)(3)(4)); // output : 24
console.log(mul(4)(3)(4)); // output : 48
```

**Ans:** Below is code followed by an explanation how it works:

```js
function mul (x) {
  return function (y) { // anonymous function
    return function (z) { // anonymous function
      return x _ y _ z;
    };
  };
}
```



### 3.3. Imagine you have this code

```js
var a = [1, 2, 3];

// a) Will this result in a crash?
a[10] = 99;

// b) What will this output?
console.log(a[6]);
```

**Ans:**

**(a)** - It will not crash. The JavaScript engine will make array slots 3 through 99 be “empty slots.”

**(b)** - Here, a[6] will output undefined, but the slot still remains empty rather than filled with undefined.

This may be an important nuance in some cases. For example, when using map(), empty slots will remain empty in map()’s output, but undefined slots will be remapped using the function passed to it:

```js
var b = [undefined];
b[2] = 1;

console.log(b); // (3) [undefined, empty × 1, 1]
console.log(b.map(e => 7)); // (3) [7, empty × 1, 7]
```


### 3.4. Can you describe the main difference between a `.forEach` loop and a `.map()` loop and why you would pick one versus the other?

To understand the differences between the two, let's look at what each function does.

**`forEach`**

- Iterates through the elements in an array.
- Executes a callback for each element.
- Does not return a value.

```js
const a = [1, 2, 3];
const doubled = a.forEach((num, index) => {
  // Do something with num and/or index.
});

// doubled = undefined
```

**`map`**

- Iterates through the elements in an array.
- "Maps" each element to a new element by calling the function on each element, creating a new array as a result.

```js
const a = [1, 2, 3];
const doubled = a.map(num => {
  return num * 2;
});

// doubled = [2, 4, 6]
```

The main difference between `.forEach` and `.map()` is that `.map()` returns a new array. If you need the result, but do not wish to mutate the original array, `.map()` is the clear choice. If you simply need to iterate over an array, `forEach` is a fine choice.

**References:**

- https://codeburst.io/javascript-map-vs-foreach-f38111822c0f

[[↑] Back to top](#js-questions)

## 4. Object

### 4.1. What are the way by which we can create object in JavaScript?

**Method 1: Function Based**

If we want to create several similar objects. In below code sample, Employee which is called constructor function. This is similar to classes in object oriented languages.

```js
function Employee(fName, lName, age, salary) {
  this.firstName = fName;
  this.lastName = lName;
  this.age = age;
  this.salary = salary;
}

// Creating multiple object which have similar property but diff value assigned to object property.
var employee1 = new Employee('John', 'Moto', 24, '5000$');
var employee2 = new Employee('Ryan', 'Jor', 26, '3000$');
var employee3 = new Employee('Andre', 'Salt', 26, '4000$');
```

**Method 2: Object Literal**

Object Literal is best way to create an object and this is used frequently. Below is code sample for create employee object which contains property as well as method.

```js
var employee = {
  name: 'Nishant',
  salary: 245678,
  getName: function() {
    return this.name;
  },
};
```

Below code sample is Nested Object Literal, Here address is an object inside employee object.

```js
var employee = {
  name: 'Nishant',
  salary: 245678,
  address: {
    addressLine1: 'BITS Pilani',
    phoneNumber: {
      workPhone: 7098889765,
      homePhone: 1234567898,
    },
  },
};
```

**Method 3: Using JavaScript new keyword**

In below code sample object has been created using Object constructor function.

```js
var employee = new Object(); // Created employee object using new keywords and Object()
employee.name = 'Nishant';
employee.getName = function() {
  return this.name;
};
```

Note: As a best practices object literal way is used to create object over this method.

### 4.2. What is the output out of the following code? Explain your answer.

```js
var a = {},
  b = { key: 'b' },
  c = { key: 'c' };

a[b] = 123;
a[c] = 456;

console.log(a[b]);
```

Answer: The output of this code will be 456 (not 123).

- The reason for this is as follows: When setting an object property, JavaScript will implicitly stringify the parameter value.
- In this case, since b and c are both objects, they will both be converted to "[object Object]".
- As a result, a[b] and a[c] are both equivalent to a["[object Object]"] and can be used interchangeably. Therefore, setting or referencing a[c] is precisely the same as setting or referencing a[b].



### 4.3. Assuming d is an “empty” object in scope, say:

```js
var d = {};
```

…what is accomplished using the following code?

```js
['zebra', 'horse'].forEach(function(k) {
  d[k] = undefined;
});
```

### 4.4. How do you clone an object?

```js
var obj = { a: 1, b: 2 };
var objclone = Object.assign({}, obj);
```

Now the value of objclone is `{a: 1 ,b: 2}` but points to a different object than obj.

Note the potential pitfall, though: `Object.clone()` will just do a shallow copy, not a deep copy. This means that nested objects aren’t copied. They still refer to the same nested objects as the original:

```js
let obj = {
  a: 1,
  b: 2,
  c: {
    age: 30,
  },
};

var objclone = Object.assign({}, obj);
console.log('objclone: ', objclone);

obj.c.age = 45;
console.log('After Change - obj: ', obj); // 45 - This also changes
console.log('After Change - objclone: ', objclone); // 45
```

### 4.5. What is a potential pitfall with using typeof bar === "object" to determine if bar is an object? How can this pitfall be avoided?

Although `typeof bar === "object"` is a reliable way of checking if bar is an object, the surprising gotcha in JavaScript is that null is also considered an object!

Therefore, the following code will, to the surprise of most developers, log true (not false) to the console:

```js
var bar = null;
console.log(typeof bar === 'object'); // logs true!
```

As long as one is aware of this, the problem can easily be avoided by also checking if bar is null:

```js
console.log(bar !== null && typeof bar === 'object'); // logs false
```

To be entirely thorough in our answer, there are two other things worth noting:

- **First**, the above solution will return false if bar is a function. In most cases, this is the desired behavior, but in situations where you want to also return true for functions, you could amend the above solution to be:

```js
console.log(
  bar !== null && (typeof bar === 'object' || typeof bar === 'function'),
);
```

- **Second**, the above solution will return true if bar is an array (e.g., `if var bar = []`;). In most cases, this is the desired behavior, since arrays are indeed objects, but in situations where you want to also false for arrays, you could amend the above solution to be:

```js
console.log(
  bar !== null &&
    typeof bar === 'object' &&
    toString.call(bar) !== '[object Array]',
);
```

However, there’s one other alternative that returns false for nulls, arrays, and functions, but true for objects:

```js
console.log(bar !== null && bar.constructor === Object);
```

Or, if you’re using jQuery:

```js
console.log(bar !== null && typeof bar === 'object' && !$.isArray(bar));
```

ES5 makes the array case quite simple, including its own null check:
console.log(Array.isArray(bar));
### 4.6. How we can prevent modification of object in JavaScript?

ECMAScript 5 introduce several methods to prevent modification of object which lock down object to ensure that no one, accidentally or otherwise, change functionality of Object.

There are three levels of preventing modification:

**1: Prevent extensions:**

No new properties or methods can be added to the object, but one can change the existing properties and method

```js
var employee = {
  name: 'Nishant',
};

// lock the object
Object.preventExtensions(employee);

// Now try to change the employee object property name
employee.name = 'John'; // work fine

//Now try to add some new property to the object
employee.age = 24; // fails silently unless it's inside the strict mode
```

**2: Seal:**

It is same as prevent extension, in addition to this also prevent existing properties and methods from being deleted.

To seal an object, we use `Object.seal()` method. You can check whether an object is sealed or not using `Object.isSealed()`;

```js
var employee = {
name: "Nishant"
};

// Seal the object
Object.seal(employee);

console.log(Object.isExtensible(employee)); // false
console.log(Object.isSealed(employee)); // true

delete employee.name // fails silently unless it's in strict mode

// Trying to add new property will give an error
employee.age = 30; // fails silently unless in strict mode
When an object is sealed, its existing properties and methods can't be removed. Sealed object are also non-extensible.
```

**3: Freeze:**

Same as seal, In addition to this prevent existing properties methods from being modified (All properties and methods are read only).
To freeze an object, use `Object.freeze()` method. We can also determine whether an object is frozen using `Object.isFrozen()`;

```js
var employee = {
  name: 'Nishant',
};

//Freeze the object
Object.freeze(employee);

// Seal the object
Object.seal(employee);

console.log(Object.isExtensible(employee)); // false
console.log(Object.isSealed(employee)); // true
console.log(Object.isFrozen(employee)); // true

employee.name = 'xyz'; // fails silently unless in strict mode
employee.age = 30; // fails silently unless in strict mode
delete employee.name; // fails silently unless it's in strict mode
```

Frozen objects are considered both non-extensible and sealed.

### 4.7. Write a function called deepClone which takes an object and creates an object copy of it.

```js
function deepClone(object) {
  var newObject = {};
  for (var key in object) {
    if (typeof object[key] === 'object') {
      newObject[key] = deepClone(object[key]);
    } else {
      newObject[key] = object[key];
    }
  }
  return newObject;
}

var newObject = deepClone(obj);
```

So when we do deep clone then we should copy every property (including the nested object).


### 4.8. Write code for merge two JavaScript Object dynamically.

Let say you have two object

```js
var person = {
  name: 'John',
  age: 24,
};

var location = {
  addressLine1: 'Some Location x',
  addressLine2: 'Some Location y',
  city: 'NewYork',
};
```

Write merge function which will take two object and add all the own property of second object into first object - `merge(person , location);`

Now person should have 5 properties `name , age , addressLine1 , addressLine2 , city`

**Ans:**

**Method 1: Using ES6, Object assign method**

```js
function merge(toObj, fromObj) {
  return Object.assign(person, location);
}
```

**Method 2: Without using in-built function**

```js
function merge(toObj, fromObj) {
  // Make sure both of the parameter is an object
  if (typeof toObj === 'object' && typeof fromObj === 'object') {
    for (var pro in fromObj) {
      // Assign only own properties not inherited properties
      if (fromObj.hasOwnProperty(pro)) {
        // Assign property and value
        toObj[pro] = fromObj[pro];
      }
    }
  } else {
    throw 'Merge function can apply only on object';
  }
}
```

### 4.9. What will the code below output to the console and why?

```js
var myObject = {
  foo: 'bar',
  func: function() {
    var self = this;
    console.log('outer func: this.foo = ' + this.foo);
    console.log('outer func: self.foo = ' + self.foo);
    (function() {
      console.log('inner func: this.foo = ' + this.foo);
      console.log('inner func: self.foo = ' + self.foo);
    })();
  },
};
myObject.func();
```

**Ans:**

The above code will output the following to the console:

```js
outer func: this.foo = bar
outer func: self.foo = bar
inner func: this.foo = undefined
inner func: self.foo = bar
```

- In the outer function, both this and self-refer to myObject and therefore both can properly reference and access foo.
- In the inner function, though, this no longer refers to myObject. As a result, this.foo is undefined in the inner function, whereas the reference to the local variable self remains in scope and is accessible there.



### 4.10. What's the difference between host objects and native objects?

Native objects are objects that are part of the JavaScript language defined by the ECMAScript specification, such as `String`, `Math`, `RegExp`, `Object`, `Function`, etc.

Host objects are provided by the runtime environment (browser or Node), such as `window`, `XMLHTTPRequest`, etc.

**References:**

- https://stackoverflow.com/questions/7614317/what-is-the-difference-between-native-objects-and-host-objects

[[↑] Back to top](#js-questions)



### 4.11. What is non-enumerable property in JavaScript and how can create?

Object can have properties that don't show up when you iterate through object using `for...in` loop or using `Object.keys()` to get an array of property names. This properties is known as non-enumerable properties.

Let say we have following object:

```js
var person = {
  name: 'John',
};
person.salary = '10000$';
person['country'] = 'USA';

console.log(Object.keys(person)); // ['name', 'salary', 'country']
```

As we know that person object properties name, salary ,country are enumerable hence it's shown up when we called `Object.keys(person)`.

To create a non-enumerable property we have to use `Object.defineProperty()`. This is a special method for creating non-enumerable property in JavaScript.

```js
var person = {
  name: 'John',
};
person.salary = '10000$';
person['country'] = 'USA';

// Create non-enumerable property
Object.defineProperty(person, 'phoneNo', {
  value: '8888888888',
  enumerable: false,
});

Object.keys(person); // ['name', 'salary', 'country']
```

In above example phoneNo property didn't show up because we made it non-enumerable by setting `enumerable:false`.

Now let's try to change value of phoneNo.

```js
person.phoneNo = '7777777777';
```

Changing non-enumerable property value will return error in strict mode.

In non-strict mode it won't through any error but it won't change the value of phoneNo.

**Bonus:** `Object.defineProperty()` is also let you create read-only properties as we saw above, we are not able to modify phoneNo value of a person object.



## 5. Scope

### 5.1. Explain why the following doesn't work as an IIFE?

```js
function foo(){ }();
```

What needs to be changed to properly make it an IIFE?

**Ans:** IIFE stands for Immediately Invoked Function Expressions.

The JavaScript parser reads `function foo(){ }();` as `function foo(){ }` and `();` where the former is a function declaration and the latter (a pair of brackets) is an attempt at calling a function but there is no name specified, hence it throws Uncaught `SyntaxError: Unexpected token`.

Here are two ways to fix it that involves adding more brackets:

`(function foo(){ })()` and `(function foo(){ }())`.

These functions are not exposed in the global scope and you can even omit its name if you do not need to reference itself within the body.

You might also use void operator: `void function foo(){ }()`;

Unfortunately, there is one issue with such approach. The evaluation of given expression is always undefined, so if your IIFE function returns anything, you can't use it. An example:

```js
// Don't add JS syntax to this code block to prevent Prettier from formatting it.
const foo = void (function bar() {
  return 'foo';
})();
console.log(foo); // undefined
```

### 5.2. What is JavaScript Self-Invoking anonymous function or Self-Executing anonymous function?

A self-invoking anonymous function also called self-executing anonymous function runs immediately or automatically when we define it and self-invoking anonymous function doesn't have any name at all.

Self-Invoking anonymous function syntax:

```js
(function() {
  console.log('Self-Invoking function code logic ');
})();
```

Output: Self-Invoking function code logic

We must have to know the fact that JavaScript functions run immediately when we put () after their names.

```js
function display() {
  console.log('Display me');
}
display(); // This will run immediately
// Output: "Display me"
```

This will not run immediately as we haven't put () after function name, function name is use full when we want to pass it as callback to another function or method.

```js
function testCallBack(callback) {
  callback();
  // This will call display method immediately if callback is being set method display
}
testCallBack(display); // Here display function is being passed as callback
```
### 5.3. What is the significance of, and reason for, wrapping the entire content of a JavaScript source file in a function block?

- This is an increasingly common practice, employed by many popular JavaScript libraries (jQuery, Node.js, etc.).
- This technique creates a closure around the entire contents of the file which, perhaps most importantly, creates a private namespace and thereby helps avoid potential name clashes between different JavaScript modules and libraries.
- Another feature of this technique is to allow for an easily reference able (presumably shorter) alias for a global variable. This is often used, for example, in jQuery plugins.
- JQuery allows you to disable the $ reference to the jQuery namespace, using jQuery.noConflict().
- If this has been done, your code can still use $ employing this closure technique, as follows:


### 5.4. What is the drawback of creating true private in JavaScript?

One of the drawback of creating a true private method in JavaScript is that they are very memory inefficient because a new copy of the method would be created for each instance.

So as recommendation don't go for a private method unless it's necessary.

### 5.5. What will this code print?

```js
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, i * 1000);
}
```

**Ans:**

- It will print 0 1 2 3 4, because we use let instead of var here.
- The variable i is only seen in the for loop’s block scope.


### 5.6. What will the following code output and why?

```js
var b = 1;
function outer() {
  var b = 2;
  function inner() {
    b++;
    var b = 3;
    console.log(b);
  }
  inner();
}
outer();
```

**Ans:**

Output to the console will be “3”.

- There are three closures in the example, each with its own `var b` declaration.
- When a variable is invoked closures will be checked in order from local to global until an instance is found.
- Since the inner closure has a b variable of its own, that is what will be output.

Furthermore, due to hoisting the code in inner will be interpreted as follows:

```js
function inner() {
  var b; // b is undefined
  b++; // b is NaN
  b = 3; // b is 3
  console.log(b); // output "3"
}
```

### 5.7. What will be the output of the following code

```js
for (var i = 0; i < 5; i++) {
  setTimeout(function() { console.log(i); }, i _ 1000 );
}
```

Explain your answer. How could the use of closures help here?

**Ans:**

- The code sample shown will not display the values 0, 1, 2, 3, and 4 as might be expected; rather, it will display 5, 5, 5, 5, and 5.
- The reason for this is that each function executed within the loop will be executed after the entire loop has completed and all will therefore reference the last value stored in i, which was 5.
- Closures can be used to prevent this problem by creating a unique scope for each iteration, storing each unique value of the variable within its scope, as follows:

```js
for (var i = 0; i < 5; i++) {
  (function(x) {
    setTimeout(function() { console.log(x); }, x \_ 1000 );
  })(i);
}
```

This will produce the presumably desired result of logging 0, 1, 2, 3, and 4 to the console.
In an ES2015 context, you can simply use let instead of var in the original code:

```js
for (let i = 0; i < 5; i++) {
  setTimeout(function() { console.log(i); }, i \* 1000 );
}
```


### 5.8. In what order will the numbers 1-4 be logged to the console when the code below is executed? Why?

```js
(function() {
  console.log(1);
  setTimeout(function() {
    console.log(2);
  }, 1000);
  setTimeout(function() {
    console.log(3);
  }, 0);
  console.log(4);
})();
```

**Ans:** The values will be logged in the following order:

```js
1;
4;
3;
2;
```

Let’s first explain the parts of this that are presumably more obvious:

- 1 and 4 are displayed first since they are logged by simple calls to console.log() without any delay.
- 2 is displayed after 3 because 2 is being logged after a delay of 1000 msecs (i.e., 1 second) whereas 3 is being logged after a delay of 0 msecs.
- OK, fine. But if 3 is being logged after a delay of 0 msecs, doesn’t that mean that it is being logged right away? And, if so, shouldn’t it be logged before 4, since 4 is being logged by a later line of code?
- The answer has to do with properly understanding JavaScript events and timing.
- The browser has an event loop which checks the event queue and processes pending events. For example, if an event happens in the background (e.g., a script onload event) while the browser is busy (e.g., processing an onclick), the event gets appended to the queue.
- When the onclick handler is complete, the queue is checked and the event is then handled (e.g., the onload script is executed).
- Similarly, setTimeout() also puts execution of its referenced function into the event queue if the browser is busy.
- When a value of zero is passed as the second argument to setTimeout(), it attempts to execute the specified function “as soon as possible”.
- Specifically, execution of the function is placed on the event queue to occur on the next timer tick.
- Note, though, that this is not immediate; the function is not executed until the next tick.
- That’s why in the above example, the call to console.log(4) occurs before the call to console.log(3) (since the call to console.log(3) is invoked via setTimeout, so it is slightly delayed).


### 5.9. Explain how `this` works in JavaScript

There's no simple explanation for `this`; it is one of the most confusing concepts in JavaScript. A hand-wavey explanation is that the value of `this` depends on how the function is called. I have read many explanations on `this` online, and I found [Arnav Aggrawal](https://medium.com/@arnav_aggarwal)'s explanation to be the clearest. The following rules are applied:

1.  If the `new` keyword is used when calling the function, `this` inside the function is a brand new object.
2.  If `apply`, `call`, or `bind` are used to call/create a function, `this` inside the function is the object that is passed in as the argument.
3.  If a function is called as a method, such as `obj.method()` — `this` is the object that the function is a property of.
4.  If a function is invoked as a free function invocation, meaning it was invoked without any of the conditions present above, `this` is the global object. In a browser, it is the `window` object. If in strict mode (`'use strict'`), `this` will be `undefined` instead of the global object.
5.  If multiple of the above rules apply, the rule that is higher wins and will set the `this` value.
6.  If the function is an ES2015 arrow function, it ignores all the rules above and receives the `this` value of its surrounding scope at the time it is created.

For an in-depth explanation, do check out his [article on Medium](https://codeburst.io/the-simple-rules-to-this-in-javascript-35d97f31bde3).

**References:**
- https://codeburst.io/the-simple-rules-to-this-in-javascript-35d97f31bde3
- https://stackoverflow.com/a/3127440/1751946

[[↑] Back to top](#js-questions)

### 5.10. Explain how this works in JavaScript

There's no simple explanation for this; it is one of the most confusing concepts in JavaScript. A hand-wavey explanation is that the value of this depends on how the function is called.

1. If the new keyword is used when calling the function, this inside the function is a brand new object.
2. If apply, call, or bind are used to call/create a function, this inside the function is the object that is passed in as the argument.
3. If a function is called as a method, such as obj.method() — this is the object that the function is a property of.
4. If a function is invoked as a free function invocation, meaning it was invoked without any of the conditions present above, this is the global object.
5. In a browser, it is the window object. If in strict mode ('use strict'), this will be undefined instead of the global object.
6. If multiple of the above rules apply, the rule that is higher wins and will set this value.
7. If the function is an ES2015 arrow function, it ignores all the rules above and receives this value of its surrounding scope at the time it is created.

### 5.11. What is a closure, and how/why would you use one?

A closure is the combination of a function and the lexical environment within which that function was declared. The word "lexical" refers to the fact that lexical scoping uses the location where a variable is declared within the source code to determine where that variable is available. Closures are functions that have access to the outer (enclosing) function's variables—scope chain even after the outer function has returned.

**Why would you use one?**

- Data privacy / emulating private methods with closures. Commonly used in the [module pattern](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript).
- [Partial applications or currying](https://medium.com/javascript-scene/curry-or-partial-application-8150044c78b8#.l4b6l1i3x).

**References:**

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
- https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36

[[↑] Back to top](#js-questions)



### 5.12. What is a “closure” in JavaScript? Provide an example.

A closure is an inner function that has access to the variables in the outer (enclosing) function’s scope chain.

The closure has access to variables in three scopes; specifically: (1) variable in its own scope, (2) variables in the enclosing function’s scope, and (3) global variables.

Here is an example:

```js
var globalVar = 'xyz';

(function outerFunc(outerArg) {
  var outerVar = 'a';

  (function innerFunc(innerArg) {
    var innerVar = 'b';

    console.log(
      'outerArg = ' +
        outerArg +
        '\n' +
        'innerArg = ' +
        innerArg +
        '\n' +
        'outerVar = ' +
        outerVar +
        '\n' +
        'innerVar = ' +
        innerVar +
        '\n' +
        'globalVar = ' +
        globalVar,
    );
  })(456);
})(123);
```

In the above example, variables from `innerFunc`, `outerFunc`, and the global namespace are all in scope in the `innerFunc`. The above code will therefore produce the following output:

```js
outerArg = 123;
innerArg = 456;
outerVar = a;
innerVar = b;
globalVar = xyz;
```


### 5.13. What's the difference between `.call` and `.apply`?

Both `.call` and `.apply` are used to invoke functions and the first parameter will be used as the value of `this` within the function. However, `.call` takes in comma-separated arguments as the next arguments while `.apply` takes in an array of arguments as the next argument. An easy way to remember this is C for `call` and comma-separated and A for `apply` and an array of arguments.

```js
function add(a, b) {
  return a + b;
}

console.log(add.call(null, 1, 2)); // 3
console.log(add.apply(null, [1, 2])); // 3
```

[[↑] Back to top](#js-questions)

### 5.14. Explain `Function.prototype.bind`.

Taken word-for-word from [MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Function/bind):

> The `bind()` method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

In my experience, it is most useful for binding the value of `this` in methods of classes that you want to pass into other functions. This is frequently done in React components.

**References:**

- https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Function/bind

[[↑] Back to top](#js-questions)

### 5.15. Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it?

Every script has access to the global scope, and if everyone uses the global namespace to define their variables, collisions will likely occur. Use the module pattern (IIFEs) to encapsulate your variables within a local namespace.

[[↑] Back to top](#js-questions)

### 5.16. What is “closure” in JavaScript? Provide an example?

A closure is a function defined inside another function (called parent function) and has access to the variable which is declared and defined in parent function scope.

The closure has access to variable in three scopes:

1. Variable declared in his own scope
2. Variable declared in parent function scope
3. Variable declared in global namespace∏

## 6. Inheritance

### 6.1. Explain how prototypal inheritance works

This is an extremely common JavaScript interview question. All JavaScript objects have a `prototype` property, that is a reference to another object. When a property is accessed on an object and if the property is not found on that object, the JavaScript engine looks at the object's `prototype`, and the `prototype`'s `prototype` and so on, until it finds the property defined on one of the `prototype`s or until it reaches the end of the prototype chain. This behavior simulates classical inheritance, but it is really more of [delegation than inheritance](https://davidwalsh.name/javascript-objects).

**References:**

- https://www.quora.com/What-is-prototypal-inheritance/answer/Kyle-Simpson
- https://davidwalsh.name/javascript-objects

[[↑] Back to top](#js-questions)


### 6.2. Modify `console.log()` method and add more property to default JavaScript methods?

- Now you can do simple things like add a DEBUG flag to enable/disable logging:

```js
var DEBUG = true; // Enable logging

var log = function() {
  if (DEBUG) {
    console.log.apply(console, arguments);
  }
};
```

Modifying Log Messages:

- You may want to modify the log messages, e.g., add a prefix to all logged messages to determine where the message is coming from, e.g.,

```js
var LOG_PREFIX = '[MyClass]';

var log = function() {
  // 1. Convert args to a normal array
  var args = Array.prototype.slice.call(arguments);

  // 2. Prepend log prefix log string
  args.unshift(LOG_PREFIX + ' ');

  // 3. Pass along arguments to console.log
  console.log.apply(console, args);
};
```

- We must convert the arguments object to a proper array to use Array.unshift. This is because the arguments object is only an "Array-like" object, i.e., you can use subscripts, e.g., arguments[0], and get its arguments.length property, but that's about it.

NOTE: Personally, tried code in “chrome console”. This will not work on any online editor.

```js
var timeStamp = 'Current Time: ';
var logs = console.log;
console.log = function() {
  var args = Array.prototype.slice.call(arguments);
  args.unshift(timeStamp);
  logs.apply(console, args);
};
```

## 7. Callback, Async & Promise

### 7.1. Explain Ajax in as much detail as possible.

Ajax (asynchronous JavaScript and XML) is a set of web development techniques using many web technologies on the client side to create asynchronous web applications. With Ajax, web applications can send data to and retrieve from a server asynchronously (in the background) without interfering with the display and behavior of the existing page. By decoupling the data interchange layer from the presentation layer, Ajax allows for web pages, and by extension web applications, to change content dynamically without the need to reload the entire page. In practice, modern implementations commonly substitute use JSON instead of XML, due to the advantages of JSON being native to JavaScript.

The `XMLHttpRequest` API is frequently used for the asynchronous communication or these days, the `fetch` API.

**References:**

- https://en.wikipedia.org/wiki/Ajax_(programming)
- https://developer.mozilla.org/en-US/docs/AJAX

[[↑] Back to top](#js-questions)

### 7.2. What are the advantages and disadvantages of using Ajax?

**Advantages**

- Better interactivity. New content from the server can be changed dynamically without the need to reload the entire page.
- Reduce connections to the server since scripts and stylesheets only have to be requested once.
- State can be maintained on a page. JavaScript variables and DOM state will persist because the main container page was not reloaded.
- Basically most of the advantages of an SPA.

**Disadvantages**

- Dynamic webpages are harder to bookmark.
- Does not work if JavaScript has been disabled in the browser.
- Some webcrawlers do not execute JavaScript and would not see content that has been loaded by JavaScript.
- Basically most of the disadvantages of an SPA.

[[↑] Back to top](#js-questions)

### 7.3. Explain how JSONP works (and how it's not really Ajax).

JSONP (JSON with Padding) is a method commonly used to bypass the cross-domain policies in web browsers because Ajax requests from the current page to a cross-origin domain is not allowed.

JSONP works by making a request to a cross-origin domain via a `<script>` tag and usually with a `callback` query parameter, for example: `https://example.com?callback=printData`. The server will then wrap the data within a function called `printData` and return it to the client.

```html
<!-- https://mydomain.com -->
<script>
function printData(data) {
  console.log(`My name is ${data.name}!`);
}
</script>

<script src="https://example.com?callback=printData"></script>
```

```js
// File loaded from https://example.com?callback=printData
printData({ name: 'Yang Shun' });
```

The client has to have the `printData` function in its global scope and the function will be executed by the client when the response from the cross-origin domain is received.

JSONP can be unsafe and has some security implications. As JSONP is really JavaScript, it can do everything else JavaScript can do, so you need to trust the provider of the JSONP data.

These days, [CORS](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing) is the recommended approach and JSONP is seen as a hack.

**References:**

- https://stackoverflow.com/a/2067584/1751946

[[↑] Back to top](#js-questions)

### 7.4. Why is extending built-in JavaScript objects not a good idea?

Extending a built-in/native JavaScript object means adding properties/functions to its `prototype`. While this may seem like a good idea at first, it is dangerous in practice. Imagine your code uses a few libraries that both extend the `Array.prototype` by adding the same `contains` method, the implementations will overwrite each other and your code will break if the behavior of these two methods is not the same.

The only time you may want to extend a native object is when you want to create a polyfill, essentially providing your own implementation for a method that is part of the JavaScript specification but might not exist in the user's browser due to it being an older browser.

**References:**

- http://lucybain.com/blog/2014/js-extending-built-in-objects/

[[↑] Back to top](#js-questions)

### 7.5. What is the extent of your experience with Promises and/or their polyfills?

Possess working knowledge of it. A promise is an object that may produce a single value sometime in the future: either a resolved value or a reason that it's not resolved (e.g., a network error occurred). A promise may be in one of 3 possible states: fulfilled, rejected, or pending. Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.

Some common polyfills are `$.deferred`, Q and Bluebird but not all of them comply with the specification. ES2015 supports Promises out of the box and polyfills are typically not needed these days.

**References:**

- https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

[[↑] Back to top](#js-questions)

### 7.6. What are the pros and cons of using Promises instead of callbacks?

**Pros**

- Avoid callback hell which can be unreadable.
- Makes it easy to write sequential asynchronous code that is readable with `.then()`.
- Makes it easy to write parallel asynchronous code with `Promise.all()`.

**Cons**

- Slightly more complex code (debatable).
- In older browsers where ES2015 is not supported, you need to load a polyfill in order to use it.

[[↑] Back to top](#js-questions)

### 7.7. Explain the difference between synchronous and asynchronous functions.

Synchronous functions are blocking while asynchronous functions are not. In synchronous functions, statements complete before the next statement is run. In this case, the program is evaluated exactly in order of the statements and execution of the program is paused if one of the statements take a very long time.

Asynchronous functions usually accept a callback as a parameter and execution continue on the next line immediately after the asynchronous function is invoked. The callback is only invoked when the asynchronous operation is complete and the call stack is empty. Heavy duty operations such as loading data from a web server or querying a database should be done asynchronously so that the main thread can continue executing other operations instead of blocking until that long operation to complete (in the case of browsers, the UI will freeze).

[[↑] Back to top](#js-questions)

### 7.8. How to wait until multiple GET requests are successfully processed?

**Using jQuery:**

- The jQuery Deferred object. $.get returns a jqXHR object that implements the Deferred interface those objects can be combined like this:

```js
  var d1 = $.get(...);
  var d2 = $.get(...);

$.when(d1, d2).done(function() {
// ...do stuff...
})
.fail(function() {
// will be called if one (or both) requests fail. If a request does fail,
// the `done` callback will _not_ be called even if one request succeeds.
});
```

**Using AngularJS -1:**

- We can use $q promises. Specifically, $q.all(). All $http methods will return promises.
- `$q.all([promise, promise, promise]).then(doSomething)` will wait for all promises to resolve then call doSomething passing an array of the promises results to it.

```js
  app.service('myService', ['$http', '$q', function($http, $q) {
    return {
      waitForBoth: function() {
      return $q.all([
        $http.get('/One/Thing'),
        $http.get('/Other/Thing')
        ]);
      };
    }
  }]);
```

Then call it:

```js
app.controller('MyCtrl', [
  '$scope',
  'myService',
  function($scope, myService) {
    myService.waitForBoth().then(function(returnValues) {
      var from1 = returnValues[0].data;
      var from2 = returnValues[1].data;
      //do something here.
    });
  },
]);
```

OR

- With `$q` service, you can chain your promise objects like this:

```js
$scope.fn1 = function(){
  var deferred = $q.defer();
    $http.({ method: 'GET', url: 'YOUR_1st_API' }).success(function(data){
    deferred.resolve(data);
  });
  return deferred.promise;
}

$scope.fn2 = function(data){
  var deferred = $q.defer();
    $http.({ method: 'GET', url: 'YOUR_2nd_API' }).success(function(data){
    deferred.resolve(data);
  });
  return deferred.promise;
}

// after $scope.fn1() is done pass data with resolve method to $scope.fn2(), now you can access data from fn1 inside fn2
$scope.fn1().then($scope.fn2);
```

### 7.9. Explain the difference between synchronous and asynchronous functions.

**Synchronous functions** are blocking while asynchronous functions are not. In synchronous functions, statements complete before the next statement is run.

In this case, the program is evaluated exactly in order of the statements and execution of the program is paused if one of the statements take a very long time.

**Asynchronous functions** usually accept a callback as a parameter and execution continue on the next line immediately after the asynchronous function is invoked.

The callback is only invoked when the asynchronous operation is complete and the call stack is empty.

Heavy duty operations such as loading data from a web server or querying a database should be done asynchronously so that the main thread can continue executing other operations instead of blocking until that long operation to complete (in the case of browsers, the UI will freeze).

### 7.10. Cancel previous Http/Ajax request?

**Using jQuery:**

- JQuery provides the `abort()` method to cancel the current request.
- “beforeSend” – property is used to check if already there is an instance of that request, if already there is an instance last request can be cancelled using “.abort()” method.

```js
var currentRequest = null;

currentRequest = jQuery.ajax({
  type: 'POST',
  data: 'value=' + text,
  url: 'AJAX_URL',
  beforeSend: function() {
    if (currentRequest != null) {
      currentRequest.abort();
    }
  },
  success: function(data) {
    // Success
  },
  error: function(e) {
    // Error
  },
});
```

## 8. DOM Methods

### 8.1. When would you use `document.write()`?

`document.write()` writes a string of text to a document stream opened by `document.open()`. When `document.write()` is executed after the page has loaded, it will call `document.open` which clears the whole document (`<head>` and `<body>` removed!) and replaces the contents with the given parameter value. Hence it is usually considered dangerous and prone to misuse.

There are some answers online that explain `document.write()` is being used in analytics code or [when you want to include styles that should only work if JavaScript is enabled](https://www.quirksmode.org/blog/archives/2005/06/three_javascrip_1.html). It is even being used in HTML5 boilerplate to [load scripts in parallel and preserve execution order](https://github.com/paulirish/html5-boilerplate/wiki/Script-Loading-Techniques#documentwrite-script-tag)! However, I suspect those reasons might be outdated and in the modern day, they can be achieved without using `document.write()`. Please do correct me if I'm wrong about this.

**References:**

- https://www.quirksmode.org/blog/archives/2005/06/three_javascrip_1.html
- https://github.com/h5bp/html5-boilerplate/wiki/Script-Loading-Techniques#documentwrite-script-tag

[[↑] Back to top](#js-questions)


### 8.2. Difference between document `load` event and document `DOMContentLoaded` event?

The `DOMContentLoaded` event is fired when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.

`window`'s `load` event is only fired after the DOM and all dependent resources and assets have loaded.

**References:**

- https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
- https://developer.mozilla.org/en-US/docs/Web/Events/load

[[↑] Back to top](#js-questions)

### 8.3. Why would you use something like the `load` event? Does this event have disadvantages? Do you know any alternatives, and why would you use those?

The `load` event fires at the end of the document loading process. At this point, all of the objects in the document are in the DOM, and all the images, scripts, links and sub-frames have finished loading.

The DOM event `DOMContentLoaded` will fire after the DOM for the page has been constructed, but do not wait for other resources to finish loading. This is preferred in certain cases when you do not need the full page to be loaded before initializing.

TODO.

**References:**

- https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload

[[↑] Back to top](#js-questions)

## 9. ES6

### 9.1. Can you give an example for destructuring an object or an array?

Destructuring is an expression available in ES6 which enables a succinct and convenient way to extract values of Objects or Arrays and place them into distinct variables.

**Array destructuring**

```js
// Variable assignment.
const foo = ['one', 'two', 'three'];

const [one, two, three] = foo;
console.log(one); // "one"
console.log(two); // "two"
console.log(three); // "three"
```

```js
// Swapping variables
let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1
```

**Object destructuring**

```js
// Variable assignment.
const o = { p: 42, q: true };
const { p, q } = o;

console.log(p); // 42
console.log(q); // true
```

**References:**

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
- https://ponyfoo.com/articles/es6-destructuring-in-depth

[[↑] Back to top](#js-questions)

### 9.2. What are the benefits of using spread syntax and how is it different from rest syntax?

ES6's spread syntax is very useful when coding in a functional paradigm as we can easily create copies of arrays or objects without resorting to `Object.create`, `slice`, or a library function. This language feature is used often in Redux and rx.js projects.

```js
function putDookieInAnyArray(arr) {
  return [...arr, 'dookie'];
}

const result = putDookieInAnyArray(['I', 'really', "don't", 'like']); // ["I", "really", "don't", "like", "dookie"]

const person = {
  name: 'Todd',
  age: 29
};

const copyOfTodd = { ...person };
```

ES6's rest syntax offers a shorthand for including an arbitrary number of arguments to be passed to a function. It is like an inverse of the spread syntax, taking data and stuffing it into an array rather than unpacking an array of data, and it works in function arguments, as well as in array and object destructuring assignments.

```js
function addFiveToABunchOfNumbers(...numbers) {
  return numbers.map(x => x + 5);
}

const result = addFiveToABunchOfNumbers(4, 5, 6, 7, 8, 9, 10); // [9, 10, 11, 12, 13, 14, 15]

const [a, b, ...rest] = [1, 2, 3, 4]; // a: 1, b: 2, rest: [3, 4]

const { e, f, ...others } = {
  e: 1,
  f: 2,
  g: 3,
  h: 4
}; // e: 1, f: 2, others: { g: 3, h: 4 }
```

**References:**

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

[[↑] Back to top](#js-questions)

### 9.3. What are the differences between ES6 class and ES5 function constructors?

Let's first look at example of each:

```js
// ES5 Function Constructor
function Person(name) {
  this.name = name;
}

// ES6 Class
class Person {
  constructor(name) {
    this.name = name;
  }
}
```

For simple constructors, they look pretty similar.

The main difference in the constructor comes when using inheritance. If we want to create a `Student` class that subclasses `Person` and add a `studentId` field, this is what we have to do in addition to the above.

```js
// ES5 Function Constructor
function Student(name, studentId) {
  // Call constructor of superclass to initialize superclass-derived members.
  Person.call(this, name);

  // Initialize subclass's own members.
  this.studentId = studentId;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// ES6 Class
class Student extends Person {
  constructor(name, studentId) {
    super(name);
    this.studentId = studentId;
  }
}
```

It's much more verbose to use inheritance in ES5 and the ES6 version is easier to understand and remember.

**References:**

- https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance
- https://eli.thegreenplace.net/2013/10/22/classical-inheritance-in-javascript-es5

[[↑] Back to top](#js-questions)

### 9.4. What are the differences between variables created using `let`, `var` or `const`?

Variables declared using the `var` keyword are scoped to the function in which they are created, or if created outside of any function, to the global object. `let` and `const` are _block scoped_, meaning they are only accessible within the nearest set of curly braces (function, if-else block, or for-loop).

```js
function foo() {
  // All variables are accessible within functions.
  var bar = 'bar';
  let baz = 'baz';
  const qux = 'qux';

  console.log(bar); // bar
  console.log(baz); // baz
  console.log(qux); // qux
}

console.log(bar); // ReferenceError: bar is not defined
console.log(baz); // ReferenceError: baz is not defined
console.log(qux); // ReferenceError: qux is not defined
```

```js
if (true) {
  var bar = 'bar';
  let baz = 'baz';
  const qux = 'qux';
}

// var declared variables are accessible anywhere in the function scope.
console.log(bar); // bar
// let and const defined variables are not accessible outside of the block they were defined in.
console.log(baz); // ReferenceError: baz is not defined
console.log(qux); // ReferenceError: qux is not defined
```

`var` allows variables to be hoisted, meaning they can be referenced in code before they are declared. `let` and `const` will not allow this, instead throwing an error.

```js
console.log(foo); // undefined

var foo = 'foo';

console.log(baz); // ReferenceError: can't access lexical declaration 'baz' before initialization

let baz = 'baz';

console.log(bar); // ReferenceError: can't access lexical declaration 'bar' before initialization

const bar = 'bar';
```

Redeclaring a variable with `var` will not throw an error, but 'let' and 'const' will.

```js
var foo = 'foo';
var foo = 'bar';
console.log(foo); // "bar"

let baz = 'baz';
let baz = 'qux'; // Uncaught SyntaxError: Identifier 'baz' has already been declared
```

`let` and `const` differ in that `let` allows reassigning the variable's value while `const` does not.

```js
// This is fine.
let foo = 'foo';
foo = 'bar';

// This causes an exception.
const baz = 'baz';
baz = 'qux';
```

**References:**

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const

[[↑] Back to top](#js-questions)


## 10. Others

### 10.1. Explain event delegation

Event delegation is a technique involving adding event listeners to a parent element instead of adding them to the descendant elements. The listener will fire whenever the event is triggered on the descendant elements due to event bubbling up the DOM. The benefits of this technique are:

- Memory footprint goes down because only one single handler is needed on the parent element, rather than having to attach event handlers on each descendant.
- There is no need to unbind the handler from elements that are removed and to bind the event for new elements.

**References:**

- https://davidwalsh.name/event-delegate
- https://stackoverflow.com/questions/1687296/what-is-dom-event-delegation

[[↑] Back to top](#js-questions)



### 10.2. What do you think of AMD vs CommonJS?

Both are ways to implement a module system, which was not natively present in JavaScript until ES2015 came along. CommonJS is synchronous while AMD (Asynchronous Module Definition) is obviously asynchronous. CommonJS is designed with server-side development in mind while AMD, with its support for asynchronous loading of modules, is more intended for browsers.

I find AMD syntax to be quite verbose and CommonJS is closer to the style you would write import statements in other languages. Most of the time, I find AMD unnecessary, because if you served all your JavaScript into one concatenated bundle file, you wouldn't benefit from the async loading properties. Also, CommonJS syntax is closer to Node style of writing modules and there is less context-switching overhead when switching between client side and server side JavaScript development.

I'm glad that with ES2015 modules, that has support for both synchronous and asynchronous loading, we can finally just stick to one approach. Although it hasn't been fully rolled out in browsers and in Node, we can always use transpilers to convert our code.

**References:**

- https://auth0.com/blog/javascript-module-systems-showdown/
- https://stackoverflow.com/questions/16521471/relation-between-commonjs-amd-and-requirejs

[[↑] Back to top](#js-questions)


### 10.3. How do you organize your code? (module pattern, classical inheritance?)

In the past, I used Backbone for my models which encourages a more OOP approach, creating Backbone models and attaching methods to them.

The module pattern is still great, but these days, I use React/Redux which utilize a single-directional data flow based on Flux architecture. I would represent my app's models using plain objects and write utility pure functions to manipulate these objects. State is manipulated using actions and reducers like in any other Redux application.

I avoid using classical inheritance where possible. When and if I do, I stick to [these rules](https://medium.com/@dan_abramov/how-to-use-classes-and-sleep-at-night-9af8de78ccb4).

[[↑] Back to top](#js-questions)

### 10.4. What's the difference between feature detection, feature inference, and using the UA string?

**Feature Detection**

Feature detection involves working out whether a browser supports a certain block of code, and running different code depending on whether it does (or doesn't), so that the browser can always provide a working experience rather crashing/erroring in some browsers. For example:

```js
if ('geolocation' in navigator) {
  // Can use navigator.geolocation
} else {
  // Handle lack of feature
}
```

[Modernizr](https://modernizr.com/) is a great library to handle feature detection.

**Feature Inference**

Feature inference checks for a feature just like feature detection, but uses another function because it assumes it will also exist, e.g.:

```js
if (document.getElementsByTagName) {
  element = document.getElementById(id);
}
```

This is not really recommended. Feature detection is more foolproof.

**UA String**

This is a browser-reported string that allows the network protocol peers to identify the application type, operating system, software vendor or software version of the requesting software user agent. It can be accessed via `navigator.userAgent`. However, the string is tricky to parse and can be spoofed. For example, Chrome reports both as Chrome and Safari. So to detect Safari you have to check for the Safari string and the absence of the Chrome string. Avoid this method.

**References:**

- https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection
- https://stackoverflow.com/questions/20104930/whats-the-difference-between-feature-detection-feature-inference-and-using-th
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent

[[↑] Back to top](#js-questions)


### 10.5. Have you ever used JavaScript templating? If so, what libraries have you used?

Yes. Handlebars, Underscore, Lodash, AngularJS, and JSX. I disliked templating in AngularJS because it made heavy use of strings in the directives and typos would go uncaught. JSX is my new favorite as it is closer to JavaScript and there is barely any syntax to learn. Nowadays, you can even use ES2015 template string literals as a quick way for creating templates without relying on third-party code.

```js
const template = `<div>My name is: ${name}</div>`;
```

However, do be aware of a potential XSS in the above approach as the contents are not escaped for you, unlike in templating libraries.

[[↑] Back to top](#js-questions)



### 10.6. Describe event bubbling.

When an event triggers on a DOM element, it will attempt to handle the event if there is a listener attached, then the event is bubbled up to its parent and the same thing happens. This bubbling occurs up the element's ancestors all the way to the `document`. Event bubbling is the mechanism behind event delegation.

[[↑] Back to top](#js-questions)

### 10.7. What's the difference between an "attribute" and a "property"?

Attributes are defined on the HTML markup but properties are defined on the DOM. To illustrate the difference, imagine we have this text field in our HTML: `<input type="text" value="Hello">`.

```js
const input = document.querySelector('input');
console.log(input.getAttribute('value')); // Hello
console.log(input.value); // Hello
```

But after you change the value of the text field by adding "World!" to it, this becomes:

```js
console.log(input.getAttribute('value')); // Hello
console.log(input.value); // Hello World!
```

**References:**

- https://stackoverflow.com/questions/6003819/properties-and-attributes-in-html

[[↑] Back to top](#js-questions)



### 10.8. Explain the same-origin policy with regards to JavaScript.

The same-origin policy prevents JavaScript from making requests across domain boundaries. An origin is defined as a combination of URI scheme, hostname, and port number. This policy prevents a malicious script on one page from obtaining access to sensitive data on another web page through that page's Document Object Model.

**References:**

- https://en.wikipedia.org/wiki/Same-origin_policy

[[↑] Back to top](#js-questions)

### 10.9. Make this work:

```js
duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5]
```

```js
function duplicate(arr) {
  return arr.concat(arr);
}

duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5]
```

[[↑] Back to top](#js-questions)

### 10.10. Why is it called a Ternary expression, what does the word "Ternary" indicate?

"Ternary" indicates three, and a ternary expression accepts three operands, the test condition, the "then" expression and the "else" expression. Ternary expressions are not specific to JavaScript and I'm not sure why it is even in this list.

**References:**

- https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

[[↑] Back to top](#js-questions)

### 10.11. What is `"use strict";`? What are the advantages and disadvantages to using it?

'use strict' is a statement used to enable strict mode to entire scripts or individual functions. Strict mode is a way to opt into a restricted variant of JavaScript.

Advantages:

- Makes it impossible to accidentally create global variables.
- Makes assignments which would otherwise silently fail to throw an exception.
- Makes attempts to delete undeletable properties throw (where before the attempt would simply have no effect).
- Requires that function parameter names be unique.
- `this` is undefined in the global context.
- It catches some common coding bloopers, throwing exceptions.
- It disables features that are confusing or poorly thought out.

Disadvantages:

- Many missing features that some developers might be used to.
- No more access to `function.caller` and `function.arguments`.
- Concatenation of scripts written in different strict modes might cause issues.

Overall, I think the benefits outweigh the disadvantages, and I never had to rely on the features that strict mode blocks. I would recommend using strict mode.

**References:**

- http://2ality.com/2011/10/strict-mode-hatred.html
- http://lucybain.com/blog/2014/js-use-strict/

[[↑] Back to top](#js-questions)

### 10.12. Create a for loop that iterates up to `100` while outputting **"fizz"** at multiples of `3`, **"buzz"** at multiples of `5` and **"fizzbuzz"** at multiples of `3` and `5`.

Check out this version of FizzBuzz by [Paul Irish](https://gist.github.com/jaysonrowe/1592432#gistcomment-790724).

```js
for (let i = 1; i <= 100; i++) {
  let f = i % 3 == 0,
    b = i % 5 == 0;
  console.log(f ? (b ? 'FizzBuzz' : 'Fizz') : b ? 'Buzz' : i);
}
```

I would not advise you to write the above during interviews though. Just stick with the long but clear approach. For more wacky versions of FizzBuzz, check out the reference link below.

**References:**

- https://gist.github.com/jaysonrowe/1592432

[[↑] Back to top](#js-questions)


### 10.13. Explain what a single page app is and how to make one SEO-friendly.

The below is taken from the awesome [Grab Front End Guide](https://github.com/grab/front-end-guide), which coincidentally, is written by me!

Web developers these days refer to the products they build as web apps, rather than websites. While there is no strict difference between the two terms, web apps tend to be highly interactive and dynamic, allowing the user to perform actions and receive a response to their action. Traditionally, the browser receives HTML from the server and renders it. When the user navigates to another URL, a full-page refresh is required and the server sends fresh new HTML to the new page. This is called server-side rendering.

However, in modern SPAs, client-side rendering is used instead. The browser loads the initial page from the server, along with the scripts (frameworks, libraries, app code) and stylesheets required for the whole app. When the user navigates to other pages, a page refresh is not triggered. The URL of the page is updated via the [HTML5 History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API). New data required for the new page, usually in JSON format, is retrieved by the browser via [AJAX](https://developer.mozilla.org/en-US/docs/AJAX/Getting_Started) requests to the server. The SPA then dynamically updates the page with the data via JavaScript, which it has already downloaded in the initial page load. This model is similar to how native mobile apps work.

The benefits:

- The app feels more responsive and users do not see the flash between page navigations due to full-page refreshes.
- Fewer HTTP requests are made to the server, as the same assets do not have to be downloaded again for each page load.
- Clear separation of the concerns between the client and the server; you can easily build new clients for different platforms (e.g. mobile, chatbots, smart watches) without having to modify the server code. You can also modify the technology stack on the client and server independently, as long as the API contract is not broken.

The downsides:

- Heavier initial page load due to the loading of framework, app code, and assets required for multiple pages.
- There's an additional step to be done on your server which is to configure it to route all requests to a single entry point and allow client-side routing to take over from there.
- SPAs are reliant on JavaScript to render content, but not all search engines execute JavaScript during crawling, and they may see empty content on your page. This inadvertently hurts the Search Engine Optimization (SEO) of your app. However, most of the time, when you are building apps, SEO is not the most important factor, as not all the content needs to be indexable by search engines. To overcome this, you can either server-side render your app or use services such as [Prerender](https://prerender.io/) to "render your javascript in a browser, save the static HTML, and return that to the crawlers".

**References:**

- https://github.com/grab/front-end-guide#single-page-apps-spas
- http://stackoverflow.com/questions/21862054/single-page-app-advantages-and-disadvantages
- http://blog.isquaredsoftware.com/presentations/2016-10-revolution-of-web-dev/
- https://medium.freecodecamp.com/heres-why-client-side-rendering-won-46a349fadb52

[[↑] Back to top](#js-questions)

### 10.14. What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?

Some examples of languages that compile to JavaScript include CoffeeScript, Elm, ClojureScript, PureScript, and TypeScript.

Advantages:

- Fixes some of the longstanding problems in JavaScript and discourages JavaScript anti-patterns.
- Enables you to write shorter code, by providing some syntactic sugar on top of JavaScript, which I think ES5 lacks, but ES2015 is awesome.
- Static types are awesome (in the case of TypeScript) for large projects that need to be maintained over time.

Disadvantages:

- Require a build/compile process as browsers only run JavaScript and your code will need to be compiled into JavaScript before being served to browsers.
- Debugging can be a pain if your source maps do not map nicely to your pre-compiled source.
- Most developers are not familiar with these languages and will need to learn it. There's a ramp up cost involved for your team if you use it for your projects.
- Smaller community (depends on the language), which means resources, tutorials, libraries, and tooling would be harder to find.
- IDE/editor support might be lacking.
- These languages will always be behind the latest JavaScript standard.
- Developers should be cognizant of what their code is being compiled to — because that is what would actually be running, and that is what matters in the end.

Practically, ES2015 has vastly improved JavaScript and made it much nicer to write. I don't really see the need for CoffeeScript these days.

**References:**

- https://softwareengineering.stackexchange.com/questions/72569/what-are-the-pros-and-cons-of-coffeescript

[[↑] Back to top](#js-questions)

### 10.15. What language constructions do you use for iterating over object properties and array items?

For objects:

- `for` loops - `for (var property in obj) { console.log(property); }`. However, this will also iterate through its inherited properties, and you will add an `obj.hasOwnProperty(property)` check before using it.
- `Object.keys()` - `Object.keys(obj).forEach(function (property) { ... })`. `Object.keys()` is a static method that will lists all enumerable properties of the object that you pass it.
- `Object.getOwnPropertyNames()` - `Object.getOwnPropertyNames(obj).forEach(function (property) { ... })`. `Object.getOwnPropertyNames()` is a static method that will lists all enumerable and non-enumerable properties of the object that you pass it.

For arrays:

- `for` loops - `for (var i = 0; i < arr.length; i++)`. The common pitfall here is that `var` is in the function scope and not the block scope and most of the time you would want block scoped iterator variable. ES2015 introduces `let` which has block scope and it is recommended to use that instead. So this becomes: `for (let i = 0; i < arr.length; i++)`.
- `forEach` - `arr.forEach(function (el, index) { ... })`. This construct can be more convenient at times because you do not have to use the `index` if all you need is the array elements. There are also the `every` and `some` methods which will allow you to terminate the iteration early.

Most of the time, I would prefer the `.forEach` method, but it really depends on what you are trying to do. `for` loops allow more flexibility, such as prematurely terminate the loop using `break` or incrementing the iterator more than once per loop.

[[↑] Back to top](#js-questions)


### 10.16. What is event loop? What is the difference between call stack and task queue?

The event loop is a single-threaded loop that monitors the call stack and checks if there is any work to be done in the task queue. If the call stack is empty and there are callback functions in the task queue, a function is dequeued and pushed onto the call stack to be executed.

If you haven't already checked out Philip Robert's [talk on the Event Loop](https://2014.jsconf.eu/speakers/philip-roberts-what-the-heck-is-the-event-loop-anyway.html), you should. It is one of the most viewed videos on JavaScript.

**References:**

- https://2014.jsconf.eu/speakers/philip-roberts-what-the-heck-is-the-event-loop-anyway.html
- http://theproactiveprogrammer.com/javascript/the-javascript-event-loop-a-stack-and-a-queue/

[[↑] Back to top](#js-questions)

### 10.17. How can you share code between files ?

This depends on the JavaScript environment.

On the client (browser environment), as long as the variables/functions are declared in the global scope (`window`), all scripts can refer to them. Alternatively, adopt the Asynchronous Module Definition (AMD) via RequireJS for a more modular approach.

On the server (Node.js), the common way has been to use CommonJS. Each file is treated as a module and it can export variables and functions by attaching them to the `module.exports` object.

ES2015 defines a module syntax which aims to replace both AMD and CommonJS. This will eventually be supported in both browser and Node environments.

[[↑] Back to top](#js-questions)

**References:**

- http://requirejs.org/docs/whyamd.html
- https://nodejs.org/docs/latest/api/modules.html
- http://2ality.com/2014/09/es6-modules-final.html

### 10.18. Why you might want to create static class members?

Static class members (properties/methods) are not tied to a specific instance of a class and have the same value regardless of which instance is referring to it. Static properties are typically configuration variables and static methods are usually pure utility functions which do not depend on the state of the instance.

**References:**

- https://stackoverflow.com/questions/21155438/when-to-use-static-variables-methods-and-when-to-use-instance-variables-methods

[[↑] Back to top](#js-questions)

### 10.19. Other Answers

- http://flowerszhong.github.io/2013/11/20/javascript-questions.html


### 10.20. What will the following code output to the console:

```js
console.log(
  (function f(n) {
    return n > 1 ? n * f(n - 1) : n;
  })(10),
);
```

Answer: The code will output the value of 10 factorial (i.e., 10!, or 3,628,800).
Here’s why: The named function f() calls itself recursively, until it gets down to calling f(1) which simply returns 1. Here, therefore, is what this does:

```js
f(1): returns n, which is 1
f(2): returns 2 _ f(1), which is 2
f(3): returns 3 _ f(2), which is 6
f(4): returns 4 _ f(3), which is 24
f(5): returns 5 _ f(4), which is 120
f(6): returns 6 _ f(5), which is 720
f(7): returns 7 _ f(6), which is 5040
f(8): returns 8 _ f(7), which is 40320
f(9): returns 9 _ f(8), which is 362880
f(10): returns 10 _ f(9), which is 3628800
```

### 10.21. Consider the code snippet below. What will the console output be and why?

```js
(function(x) {
  return (function(y) {
    console.log(x);
  })(2);
})(1);
```

**Ans:**

The output will be 1, even though the value of x is never set in the inner function. Here’s why:

- As explained in our JavaScript Hiring Guide, a closure is a function, along with all variables or functions that were in-scope at the time that the closure was created.
- In JavaScript, a closure is implemented as an “inner function”; i.e., a function defined within the body of another function. An important feature of closures is that an inner function still has access to the outer function’s variables.
- Therefore, in this example, since x is not defined in the inner function, the scope of the outer function is searched for a defined variable x, which is found to have a value of 1.

### 10.22. What will the following code output to the console and why:

```js
var hero = {
  _name: 'John Doe',
  getSecretIdentity: function() {
    return this._name;
  },
};

var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());
```

What is the issue with this code and how can it be fixed.

**Ans:** The code will output:

```js
undefined
John Doe
```

- The first console.log prints undefined because we are extracting the method from the hero object, so stoleSecretIdentity() is being invoked in the global context (i.e., the window object) where the \_name property does not exist.

One way to fix the stoleSecretIdentity() function is as follows:

```js
var stoleSecretIdentity = hero.getSecretIdentity.bind(hero);
```

### 10.23. Create a function for the below problem:

For a given a DOM Element on the page, will visit the element itself and all of its descendants (not just its immediate children). For each element visited, the function should pass that element to a provided callback function. The arguments to the function should be:

- A DOM element
- A callback function (that takes a DOM element as its argument)

**Ans:**
Visiting all elements in a tree (DOM) is a classic Depth-First-Search algorithm application. Here’s an example solution:

```js
function Traverse(p_element, p_callback) {
  p_callback(p_element);
  var list = p_element.children;
  for (var i = 0; i < list.length; i++) {
    Traverse(list[i], p_callback); // recursive call
  }
}
```

### 10.24. What is the output of the following code?

```js
var length = 10;
function fn() {
  console.log(this.length);
}

var obj = {
  length: 5,
  method: function(fn) {
    fn();
    arguments[0]();
  },
};

obj.method(fn, 1);
```

Answer: Output

```js
10;
2;
```

**- Why isn’t it 10 and 5?**

- In the first place, as fn is passed as a parameter to the function method, the scope (this) of the function fn is window.var length = 10; is declared at the window level.
- It also can be accessed as window.length or length or this.length (when this === window.) method is bound to Object obj, and obj.method is called with parameters fn and 1.
- Though method is accepting only one parameter, while invoking it has passed two parameters; the first is a function callback and other is just a number.
- When fn() is called inside method, which was passed the function as a parameter at the global level, this.length will have access to var length = 10 (declared globally) not length = 5 as defined in Object obj.
- Now, we know that we can access any number of arguments in a JavaScript function using the arguments[] array.
- Hence `arguments[0]()` is nothing but calling fn(). Inside fn now, the scope of this function becomes the arguments array, and logging the length of arguments[] will return 2. Hence the output will be as above.

### 10.25. Consider the following code. What will the output be, and why?

```js
(function() {
  try {
    throw new Error();
  } catch (x) {
    var x = 1,
      y = 2;
    console.log(x);
  }
  console.log(x);
  console.log(y);
})();
```

Answer:

```js
1;
undefined;
2;
```

var statements are hoisted (without their value initialization) to the top of the global or function scope it belongs to, even when it’s inside a with or catch block. However, the error’s identifier is only visible inside the catch block. It is equivalent to:

```js
(function () {
  var x, y; // outer and hoisted
  try {
    throw new Error();
  } catch (x /_ inner _/) {
    x = 1; // inner x, not the outer one
    y = 2; // there is only one y, which is in the outer scope
    console.log(x /_ inner _/);
  }
  console.log(x);
  console.log(y);
})();
```

### 10.26. What will be the output of this code?

```js
var x = 21;
var girl = function() {
  console.log(x);
  var x = 20;
};
girl();
```

**Ans:**

Neither 21, nor 20, the result is undefined.

It’s because JavaScript initialization is not hoisted.

**Why doesn’t it show the global value of 21?**

The reason is that when the function is executed, it checks that there’s a local x variable present but doesn’t yet declare it, so it won’t look for global one.)

### 10.27. Consider the following code snippet:

```js
for (var i = 0; i < 5; i++) {
  var btn = document.createElement('button');

  btn.appendChild(document.createTextNode('Button ' + i));
  btn.addEventListener('click', function() {
    console.log(i);
  });

  document.body.appendChild(btn);
}
```

(A) What gets logged to the console when the user clicks on “Button 4” and why?

(B) Provide one or more alternate implementations that will work as expected.

**Ans:**

(A) - No matter what button the user clicks the number 5 will always be logged to the console. This is because, at the point that the onclick method is invoked (for any of the buttons), the for loop has already completed and the variable i already has a value of 5.
(Bonus points for the interviewee if they know enough to talk about how execution contexts, variable objects, activation objects, and the internal “scope” property contribute to the closure behavior.)

(B) - The key to making this work is to capture the value of i at each pass through the for loop by passing it into a newly created function object. Here are four possible ways to accomplish this:

```js
for (var i = 0; i < 5; i++) {
  var btn = document.createElement('button');

  btn.appendChild(document.createTextNode('Button ' + i));
  btn.addEventListener(
    'click',
    (function(i) {
      return function() {
        console.log(i);
      };
    })(i),
  );

  document.body.appendChild(btn);
}
```

Alternatively, you could wrap the entire call to btn.addEventListener in the new anonymous function:

```js
for (var i = 0; i < 5; i++) {
  var btn = document.createElement('button');

  btn.appendChild(document.createTextNode('Button ' + i));
  (function(i) {
    btn.addEventListener('click', function() {
      console.log(i);
    });
  })(i);

  document.body.appendChild(btn);
}
```

Or, we could replace the for loop with a call to the array object’s native forEach method:

```js
['a', 'b', 'c', 'd', 'e'].forEach(function(value, i) {
  var btn = document.createElement('button');

  btn.appendChild(document.createTextNode('Button ' + i));
  btn.addEventListener('click', function() {
    console.log(i);
  });

  document.body.appendChild(btn);
});
```

Lastly, the simplest solution, if you’re in an ES6/ES2015 context, is to use let i instead of var i:

```js
for (let i = 0; i < 5; i++) {
  var btn = document.createElement('button');

  btn.appendChild(document.createTextNode('Button ' + i));
  btn.addEventListener('click', function() {
    console.log(i);
  });

  document.body.appendChild(btn);
}
```

**Ans:**

- The snippet of code shown above sets two properties on the object d. ideally, any lookup performed on a JavaScript object with an unset key evaluates to undefined. But running this code marks those properties as “own properties” of the object.
- This is a useful strategy for ensuring that an object has a given set of properties.
- Passing this object to Object.keys will return an array with those set keys as well (even if their values are undefined).

### 10.28. What will be output of the below code:

```js
(function() {
  var a = (b = 3);
})();
console.log('a defined? ' + (typeof a !== 'undefined'));
console.log('b defined? ' + (typeof b !== 'undefined'));
```

**Ans:**

Since both a and b are defined within the enclosing scope of the function, and since the line they are on begins with the var keyword, most JavaScript developers would expect typeof a and typeof b to both be undefined in the above example.

However, that is not the case. The issue here is that most developers incorrectly understand the statement var a = b = 3; to be shorthand for:

```js
var b = 3;
var a = b;
```

But in fact, `var a = b = 3;` is actually shorthand for:

```js
b = 3;
var a = b;
```

As a result (if you are not using strict mode), the output of the code snippet would be:

```js
a defined? false
b defined? true
```

But how can b be defined outside of the scope of the enclosing function?

Well, since the statement `var a = b = 3;` is shorthand for the statements b = 3; and var a = b; b ends up being a global variable (since it is not preceded by the var keyword) and is therefore still in scope even outside of the enclosing function.

Note that, in strict mode (i.e., with use strict), the statement var a = b = 3; will generate a runtime error of ReferenceError: b is not defined, thereby avoiding any head fakes/bugs that might otherwise result.

(Yet another prime example of why you should use use strict as a matter of course in your code!)

### 10.29. Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5.

```js
function fizzbuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log('i = ' + i + ' : fizzbuzz');
    } else if (i % 3 == 0) {
      console.log('i = ' + i + ' : fizz');
    } else if (i % 5 == 0) {
      console.log('i = ' + i + ' : buzz');
    }
  }
}

fizzbuzz();
```


### 10.30. What will be the output of the following code?

```js
var y = 1;
if (function f() {}) {
  y += typeof f;
}
console.log(y);
```

- Above code would give output `1undefined`. If condition statement evaluate using eval, so `eval(function f() {})` which return `function f() {}` which is true so inside if statement code execute.

- `typeof f` return undefined because if statement code execute at run time, so statement inside if condition evaluated at run time.

```js
var k = 1;
if (1) {
  eval(function foo() {});
  k += typeof foo;
}
console.log(k);

// Above code will also output 1undefined.
var k = 1;
if (1) {
  function foo() {}
  k += typeof foo;
}
console.log(k); // output 1function
```

### 10.31. What will be the output of the following code?

```js
var output = (function(x) {
  delete x;
  return x;
})(0);

console.log(output);
```

Above code will output `0` as output. `delete` operator is used to delete a property from an object. Here x is not an object it's local variable. delete operator doesn't affect local variable.

```js
var x = 1;
var output = (function() {
  delete x;
  return x;
})();

console.log(output);
```

Above code will output 1 as output. delete operator is used to delete property from object. Here x is not an object it's global variable of type number.

```js
var x = { foo: 1 };
var output = (function() {
  delete x.foo;
  return x.foo;
})();

console.log(output);
```

Above code will output `undefined` as output. delete operator is used to delete a property from an object.

Here `x` is an object which has foo as a property and from self-invoking function we are deleting foo property of object x and after deletion we are trying to reference deleted property foo which result undefined.

```js
var Employee = {
  company: 'xyz',
};
var emp1 = Object.create(Employee);
delete emp1.company;
console.log(emp1.company);
```

Above code will output `xyz` as output. Here `emp1` object got company as prototype property. delete operator doesn't delete prototype property.

### 10.32. What is the significance, and what are the benefits, of including 'use strict' at the beginning of a JavaScript source file?

The short and most important answer here is that use strict is a way to voluntarily enforce stricter parsing and error handling on your JavaScript code at runtime.

Code errors that would otherwise have been ignored or would have failed silently will now generate errors or throw exceptions.

In general, it is a good practice. Some of the key benefits of strict mode include:

1. Makes debugging easier.
2. Code errors that would otherwise have been ignored or would have failed silently will now generate errors or throw exceptions, alerting you sooner to problems in your code and directing you more quickly to their source.
3. Prevents accidental global. Without strict mode, assigning a value to an undeclared variable automatically creates a global variable with that name. This is one of the most common errors in JavaScript. In strict mode, attempting to do so throws an error.
4. Eliminates this coercion. Without strict mode, a reference to this value of null or undefined is automatically coerced to the global. This can cause many headfakes and pull-out-your-hair kind of bugs. In strict mode, referencing this value of null or undefined throws an error.
5. Disallows duplicate parameter values. Strict mode throws an error when it detects a duplicate named argument for a function (e.g., function foo(val1, val2, val1){}), thereby catching what is almost certainly a bug in your code that you might otherwise have wasted lots of time tracking down.
6. Note: It used to be (in ECMAScript 5) that strict mode would disallow duplicate property names (e.g. var object = {foo: "bar", foo: "baz"};) but as of ECMAScript 2015 this is no longer the case.
7. Makes eval() safer. There are some differences in the way eval() behaves in strict mode and in non-strict mode. Most significantly, in strict mode, variables and functions declared inside of an eval() statement are not created in the containing scope (they are created in the containing scope in non-strict mode, which can also be a common source of problems).
8. Throws error on invalid usage of delete. The delete operator (used to remove properties from objects) cannot be used on non-configurable properties of the object. Non-strict code will fail silently when an attempt is made to delete a non-configurable property, whereas strict mode will throw an error in such a case.

### 10.33. Explain event delegation:

Event delegation is a technique involving adding event listeners to a parent element instead of adding them to the descendant elements. The listener will fire whenever the event is triggered on the descendant elements due to event bubbling up the DOM.

The benefits of this technique are:

- Memory footprint goes down because only one single handler is needed on the parent element, rather than having to attach event handlers on each descendant.
- There is no need to unbind the handler from elements that are removed and to bind the event for new elements.


