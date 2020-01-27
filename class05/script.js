let test = "I am in global scope";

function testScope() {
  let test = "I am in local scope";
  console.log("executing f-n");
}
testScope();

// what will be printed in console.log(test) ????
console.log(test);

// ---------------------------

let test2 = "I am in global scope";

function testScope2() {
  test2 = "I am in local scope";
  console.log("executing f-n");
}
testScope2();

// what will be printed in console.log(test) ????
console.log(test2);

// -------------- VAR vs LET -------------------
var x = 10;
// Here x is 10
if (true) {
  var x = 2;
  // Here x is 2
}
console.log(x);

var y = 10;
// Here x is 10
if (true) {
  let y = 2;
  // Here x is 2
}
console.log(y);
// Here x is 10

// ------------ LET vs CONST --------------------

let a = 5;
// code code code
a = 600;
console.log(a);

const b = 5;
// code code code
// b = 600;
// console.log(b);

// arrays are reference types - just show to the variable
const array = [];
array.push(1);
console.log(array);
