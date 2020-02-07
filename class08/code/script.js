// ----------- setTimeout & setInterval -----------

// console.log("first");
// setTimeout(() => {
//   console.log("this happens after 3 seconds!");
// }, 3000);
// console.log("last");

// let handle = setInterval(() => {
//   console.log("HEY");
// }, 2000);
// document.querySelector("button").addEventListener("click", () => {
//   clearInterval(handle);
// });

// ----------- callbacks ----------------
function calculate(callback, num1, num2) {
  console.log("calculating...");
  return callback(num1, num2);
}
let result = calculate((x, y) => x + y, 2, 5);
console.log(result);
let result2 = calculate((x, y) => x * y, 2, 5);
console.log(result2);

// function first() {
//   setTimeout(() => console.log("First thing"), 1000);
//   console.log("Random thing!");
// }
// function second() {
//   console.log("Second thing!");
// }
// first();
// second();

// function first(callback) {
//   setTimeout(() => {
//     console.log("First thing");
//     callback();
//   }, 1000);
// }
// function second() {
//   console.log("Second thing!");
// }
// first(second);

// function makeCall(url, callback, callbackprint) {
//   $.ajax({
//     url: url,
//     success: function(response) {
//       console.log("The request succeeded!");
//       callback(response, callbackprint);
//     },
//     error: function(response) {
//       console.log("The request failed!");
//       callback(response);
//     }
//   });
// }
// function print(results, callback) {
//   console.log(results);
//   callback();
// }

// function print2() {
//   console.log("THE LAST JEDI");
// }
// makeCall("https://swapi.co/api/people/1/", print, print2);
