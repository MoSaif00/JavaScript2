/**

** Exercise 3: Guess the output **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/

// The output will alert along with the number 12. because a is defined 12 again inside the function so it will change globaly .
/*
- Frist a variable declared with type of value number which is 10, after that x is assigned with immediately invoked function .
- inside the function the value of a will be changed to 12 . and the function will return closure function.
- the returned funcion has an alert methond assigned to a variable.
- x() will be called and that will call the function that assigned to it which is closure so it will alert with the value of a which is inside the closure . 
*/


let a = 10;
const x = (function () {
  a = 12;
  return function () {
    alert(a);
  };
})();

x();