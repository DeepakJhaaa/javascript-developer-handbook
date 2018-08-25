var greet = {
  greeting: 'Hello, Good Morning',
};

function myFunction(name, age) {
  console.log(this.greeting + ', ' + name + ' is ' + age + ' years old.');
}

// myFunction.call(greet, "Deepak", 28);

// myFunction.apply(greet, ["Deepak",28]);

var bindDemo = myFunction.bind(this.greet);
bindDemo('Deepak', 28);
