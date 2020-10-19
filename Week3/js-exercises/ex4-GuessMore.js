/**

** Exercise 4: Guess more **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/

// The output of this part will be 9 . 
// Because the fuction  f1(x) is not logged so it will not incement number one to the value of x and only the value x logged seperately .
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);

// The output of this part will be object with {x:10}
// Because y is object and objects is always passed by reference. so when y is passed as argument it will be changed as what codes inside the function like here it must increment the value by 1 ..
const y = {
  x: 9
};

function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);