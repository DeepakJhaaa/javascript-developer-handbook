function myFunction() {
  var x = 1;
  return function increment() {
    return x++;
  };
}

var closureDemo = myFunction();

closureDemo(); // 1
closureDemo(); // 2
closureDemo(); // 3
