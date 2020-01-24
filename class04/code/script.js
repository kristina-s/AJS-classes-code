// ---------------------------Hello functions ---------------------------

// // --------------functions as we know them by far

// function sayHello() {
//   console.log("Hello!");
// }
// sayHello();

// //-------------- function with parameters
// function printFullName(firstname, lastname) {
//   let fullname = `${firstname} ${lastname}`;
//   console.log(fullname);
// }
// printFullName("Kristina", "Spasevska");

// // ------------parameters vs. arguments------------

// // ------------function with parameters and return
// function printFullNameAndTitle(firstname, lastname) {
//   let fullname = `Dr. ${firstname} ${lastname}`;
//   return fullname;
//   // return `Dr. ${firstname} ${lastname}`;
// }
// console.log(printFullNameAndTitle("Viktor", "Jakovlev"));

// // ----------------we can store the result in a variable
// let nameAndTitle = printFullNameAndTitle("Viktor", "Jakovlev");
// console.log(nameAndTitle);

// // ---------------function inside if statement
// if (printFullNameAndTitle("Geralt", "of Rivia aka Witcher").length > 20) {
//   console.log("That's a long name!");
// } else {
//   console.log("That's a fine name");
// }

// // ---------------CALLING (not declaring!!!!!!) a function inside another function declaration
// function printPersonDetails(firstname, lastname, age, city) {
//   return `Person ${printFullNameAndTitle(
//     firstname,
//     lastname
//   )} is ${age} years old and lives in ${city}`;
// }

// let person01Details = printPersonDetails("Jon", "Snow", 25, "Winterfell");
// console.log(person01Details);

// // ---------------------Annonymous functions
// let func = function() {
//   console.log("Hello");
// };
// func();
// let array = [
//   2,
//   4,
//   5,
//   function() {
//     return 2 + 5 - 7;
//   }
// ];
// console.log(array);
// console.log(array[3]());

// Arrow functions
// shorter version of anonymous functions
let someResultFirst = function(num) {
  return num + 10;
};
// one parameter no brakets
let someResultSecond = num => num + 10;
console.log(someResultFirst(25));
console.log(someResultSecond(25));

// two parameters () brackets
let sumFunc = (num1, num2) => num1 + num2;
console.log(sumFunc(25, 5));

let sumFunc1 = (num1, num2) => {
  let result = num1 + num2;
  console.log(`The result is: ${result}`);
  return result;
};
console.log(sumFunc1(22, 5));

// one line return directly after arrow and in the same line
let randomFunc = () => console.log("Hey guys!");
randomFunc();

// // Self Invoked functions
// let func = () => {
//   let result = 5;
//   console.log(result);
// };

// func();

// let result = 5;
// console.log(result);

// result = 10;

// (() => {
//   let result = 5;
//   console.log(result);
// })();

// (function(num1, num2) {
//   console.log(num1 + num2);
// })(2, 5);

// let result = (function(num1, num2) {
//   return num1 + num2;
// })(7, 5);
// console.log(result);

// function sum(num1, num2) {
//   console.log(num1 + num2);
// }

// sum(
//   (function suma(num1, num2) {
//     return num1 + num2;
//   })(7, 5),
//   5
// );

// // Scope
// // var y = 5;
// // var y = 6;
// // console.log(y);
// let x = 5;
// x = 6;
// console.log(x);

// let ten = 10; // Global scope
// function sumPlusOne(num1, num2) {
//   let one = 1; // Function sumPlusOne scope
//   console.log(num1 + num2 + one);
//   function add5(number) {
//     console.log(one);
//     let insideFunction = 100;
//     console.log(number + 5); // Function add5 scope
//   }
//   //console.log(insideFunction); // WILL NOT WORK
//   add5(one);
//   function add10(number) {
//     console.log(number + ten); // Function add10 scope
//   }
//   add10(ten);
// }
// sumPlusOne(ten, 7);

// // Recursion
// function sumTo(num) {
//   if (num === 0) {
//     return 0;
//   }
//   return num + sumTo(num - 1);
// }

// // With an arrow function ( shorter )
// let sumTo = num => (num === 0 ? 0 : num + sumTo(--num));
