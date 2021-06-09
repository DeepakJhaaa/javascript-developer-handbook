## Program: What will be the output ?

### What will this code print?

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

### What do the following lines output, and why?

```js
console.log(1 < 2 < 3);
console.log(3 > 2 > 1);
```

**Ans:**

The first statement returns true which is as expected.

- The second returns false because of how the engine works regarding operator associativity for < and >.
- It compares left to right, so 3 > 2 > 1 JavaScript translates to true > 1. true has value 1, so it then compares 1 > 1, which is false.

### How do you add an element at the beginning of an array? How do you add one at the end?

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

### Imagine you have this code

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

### What is the value of typeof `undefined == typeof NULL`?

The expression will be evaluated to true, since NULL will be treated as any other undefined variable.

Note: JavaScript is case-sensitive and here we are using NULL instead of null.

### What would following code return?

```js
console.log(typeof typeof 1);
// Ans:
string;

// typeof 1 will return "number" and typeof "number" will return string.
```

#. What will the following code output and why?

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

#. What will be the output of the following code

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

### What would the following lines of code output to the console?

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

### What will be the output when the following code is executed? Explain.

```js
console.log(false == '0'); // true
console.log(false === '0'); // false
```

- In JavaScript, there are two sets of equality operators.
- The triple-equal operator === behaves like any traditional equality operator would: evaluates to true if the two expressions on either of its sides have the same type and the same value.
- The double-equal operator, however, tries to coerce the values before comparing them.
- It is therefore generally good practice to use the === rather than ==.
- The same holds true for !== vs !=.

### What is the output out of the following code? Explain your answer.

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

### What will the following code output to the console:

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

### Consider the code snippet below. What will the console output be and why?

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

### What will the following code output to the console and why:

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

### Create a function for the below problem:

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

### What is the output of the following code?

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

### Consider the following code. What will the output be, and why?

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

### What will be the output of this code?

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

### Consider the following code snippet:

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

### Assuming d is an “empty” object in scope, say:

```js
var d = {};
```

…what is accomplished using the following code?

```js
['zebra', 'horse'].forEach(function(k) {
  d[k] = undefined;
});
```

**Ans:**

- The snippet of code shown above sets two properties on the object d. ideally, any lookup performed on a JavaScript object with an unset key evaluates to undefined. But running this code marks those properties as “own properties” of the object.
- This is a useful strategy for ensuring that an object has a given set of properties.
- Passing this object to Object.keys will return an array with those set keys as well (even if their values are undefined).

### What will the code below output to the console and why?

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

### What will the code below output to the console and why ?

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

### The following recursive code will cause a stack overflow if the array list is too large. How can you fix this and still retain the recursive pattern?

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

### In what order will the numbers 1-4 be logged to the console when the code below is executed? Why?

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

### What will the code below output to the console and why?

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

### Variable Hoisting

```js
console.log(employeeId);
// Ans: ReferenceError: employeeId is not defined

console.log(employeeId);
var employeeId = '19000';
// Ans: undefined

var employeeId = '1234abe';
(function() {
  console.log(employeeId);
  var employeeId = '122345';
})();
// Ans : undefined
```

### What will be output of the below code:

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

### Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5.

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

### Explain the difference between mutable and immutable objects?

### Explain the difference between synchronous and asynchronous functions.

**Synchronous functions** are blocking while asynchronous functions are not. In synchronous functions, statements complete before the next statement is run.

In this case, the program is evaluated exactly in order of the statements and execution of the program is paused if one of the statements take a very long time.

**Asynchronous functions** usually accept a callback as a parameter and execution continue on the next line immediately after the asynchronous function is invoked.

The callback is only invoked when the asynchronous operation is complete and the call stack is empty.

Heavy duty operations such as loading data from a web server or querying a database should be done asynchronously so that the main thread can continue executing other operations instead of blocking until that long operation to complete (in the case of browsers, the UI will freeze).
