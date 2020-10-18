/**

** Exercise 3: Guess the output **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/

// The output will alert along with the number 12. Because  inside the local function has the value of a assigned with number 12, and when it returns closure function which has alert method.
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