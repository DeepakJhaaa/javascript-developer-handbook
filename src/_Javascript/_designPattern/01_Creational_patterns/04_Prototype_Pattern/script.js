'Use Strict';
// ES6/ES5: Array Helper Functions

const arr = [5, 7, 11, 8, 3, 4, 14, 9, 13, 6, 1, 2];
/*-----------------------------------------------*/
// Q.1 map(): Iterate through each Element of array
/*-------------------ES6-------------------------*/
arr.map(num => {
  console.log(num);
});
/*--------------------ES5------------------------*/
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
/*-----------------------------------------------*/
//Q.2 map(): Increment each element by iteration count:
/*-------------------ES6-------------------------*/
let incrArr = arr.map((num, i) => {
  return num + i;
});
console.log(incrArr);
/*-------------------ES5-------------------------*/
for (var i = 0; i < arr.length; i++) {
  arr[i] = arr[i] + i;
}
console.log(arr);
/*-----------------------------------------------*/
//Q.3 filter(): The filter() method creates a new array
//with all elements that pass the test implemented by the provided function.
/*-------------------ES6-------------------------*/
let filtrArr = arr.filter(num => {
  return num < 8;
});
console.log(filtrArr);
