### How to handle multiple Http Request? , OR

### How to add response of two HTTP calls, after both calls complete? , OR

### How to wait until multiple GET requests are successfully processed?

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

### Cancel previous Http/Ajax request?

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

### Modify `console.log()` method and add more property to default JavaScript methods?

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

### What will be the output of the following code?

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

### What is the drawback of creating true private in JavaScript?

One of the drawback of creating a true private method in JavaScript is that they are very memory inefficient because a new copy of the method would be created for each instance.

So as recommendation don't go for a private method unless it's necessary.

### What is “closure” in JavaScript? Provide an example?

A closure is a function defined inside another function (called parent function) and has access to the variable which is declared and defined in parent function scope.

The closure has access to variable in three scopes:

1. Variable declared in his own scope
2. Variable declared in parent function scope
3. Variable declared in global namespace

### Write a mul function which will invoked as below syntax.

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

Here mul function accept the first argument and return anonymous function which take the second parameter and return anonymous function which take the third parameter and return multiplication of arguments which is being passed in successive.

### What will be the output of the following code?

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

### What is the difference between declaring a function in below format?

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

### How to check if an object is an array or not?

### What will be the output of the following code?

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

### What will be the output of the following code?

```js
var z = 1,
  y = (z = typeof y);
console.log(y);
```

Above code will output `undefined` as output.

- According to associativity rule operator with the same precedence are processed based on their associativity property of operator.

- Here associativity of the assignment operator is Right to Left so first typeof y will evaluate first which is undefined and assigned to z and then y would be assigned the value of z and then z would be assign value 1.

### What will be the output of the following code?

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

### What are the way by which we can create object in JavaScript?

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

### What is the difference between a method and a function in JavaScript?

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

### Write a function called deepClone which takes an object and creates an object copy of it.

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

### How we can prevent modification of object in JavaScript?

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

### Write code for merge two JavaScript Object dynamically.

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

### What is non-enumerable property in JavaScript and how can create?

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

### What is JavaScript Self-Invoking anonymous function or Self-Executing anonymous function?

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

### What is the significance of, and reason for, wrapping the entire content of a JavaScript source file in a function block?

- This is an increasingly common practice, employed by many popular JavaScript libraries (jQuery, Node.js, etc.).
- This technique creates a closure around the entire contents of the file which, perhaps most importantly, creates a private namespace and thereby helps avoid potential name clashes between different JavaScript modules and libraries.
- Another feature of this technique is to allow for an easily reference able (presumably shorter) alias for a global variable. This is often used, for example, in jQuery plugins.
- JQuery allows you to disable the $ reference to the jQuery namespace, using jQuery.noConflict().
- If this has been done, your code can still use $ employing this closure technique, as follows:

### What is the significance, and what are the benefits, of including 'use strict' at the beginning of a JavaScript source file?

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

### What is a potential pitfall with using typeof bar === "object" to determine if bar is an object? How can this pitfall be avoided?

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

### What will the code below output? Explain your answer.

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

### Consider the two functions below. Will they both return the same thing? Why or why not?

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

### What is NaN? What is its type? How can you reliably test if a value is equal to NaN?

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

### Discuss possible ways to write a function `isInteger(x)` that determines if x is an integer.

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

### Write a simple function that returns a boolean indicating whether or not a string is a palindrome?

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

### Write a sum method which will work properly when invoked using either syntax below.

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

### What is a “closure” in JavaScript? Provide an example.

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

### How do you clone an object?

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

### Explain event delegation:

Event delegation is a technique involving adding event listeners to a parent element instead of adding them to the descendant elements. The listener will fire whenever the event is triggered on the descendant elements due to event bubbling up the DOM.

The benefits of this technique are:

- Memory footprint goes down because only one single handler is needed on the parent element, rather than having to attach event handlers on each descendant.
- There is no need to unbind the handler from elements that are removed and to bind the event for new elements.

### Explain how this works in JavaScript

There's no simple explanation for this; it is one of the most confusing concepts in JavaScript. A hand-wavey explanation is that the value of this depends on how the function is called.

1. If the new keyword is used when calling the function, this inside the function is a brand new object.
2. If apply, call, or bind are used to call/create a function, this inside the function is the object that is passed in as the argument.
3. If a function is called as a method, such as obj.method() — this is the object that the function is a property of.
4. If a function is invoked as a free function invocation, meaning it was invoked without any of the conditions present above, this is the global object.
5. In a browser, it is the window object. If in strict mode ('use strict'), this will be undefined instead of the global object.
6. If multiple of the above rules apply, the rule that is higher wins and will set this value.
7. If the function is an ES2015 arrow function, it ignores all the rules above and receives this value of its surrounding scope at the time it is created.

### Explain why the following doesn't work as an IIFE?

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

### What's the difference between a variable that is: `null`, `undefined` or `undeclared`?

**Undeclared** - variables are created when you assign a value to an identifier that is not previously created using var, let or const. Undeclared variables will be defined globally, outside of the current scope.

In strict mode, a ReferenceError will be thrown when you try to assign to an undeclared variable.

Undeclared variables are bad just like how global variables are bad.

Avoid them at all cost! To check for them, wrap its usage in a try/catch block

```js
function foo() {
  x = 1; // Throws a ReferenceError in strict mode
}

foo();
console.log(x); // 1
```

**undefined** - A variable that is undefined is a variable that has been declared, but not assigned a value. It is of type undefined.

If a function does not return any value as the result of executing it is assigned to a variable, the variable also has the value of undefined.

To check for it, compare using the strict equality (===) operator or `typeof` which will give the '`undefined`'string.

Note that you should not be using the abstract equality operator to check, as it will also return true if the value is null.

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

**null** - A variable that is null will have been explicitly assigned to the null value.

It represents no value and is different from undefined in the sense that it has been explicitly assigned.

To check for null, simply compare using the strict equality operator. Note that like the above, you should not be using the abstract equality operator (==) to check, as it will also return true if the value is undefined.

```js
var foo = null;
console.log(foo === null); // true
console.log(typeof foo === 'object'); // true

console.log(foo == undefined); // true. Wrong, don't use this to check!
```

As a personal habit, I never leave my variables undeclared or unassigned.

I will explicitly assign null to them after declaring if I don't intend to use it yet.

If you use a linter in your workflow, it will usually also be able to check that you are not referencing undeclared variables.
