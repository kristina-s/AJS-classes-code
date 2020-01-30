// ---------------- HIGH ORDER FUNCTIONS ---------------

// high order functions are function that take another function as a parameter
// MAP, FILTER< REDUCE< FOREACH, SORT

let numbers = [1, 2, 3, 4, 5];
console.log("original array", numbers);
console.log("=============== MAP ======================");

//
// ----------- MAP --------------
// .map is used to transform arrays, it returns the same number of elements in the new array

// trandform array without map
function multiplyByTwo(array) {
  let newArray = [];

  for (const number of array) {
    newArray.push(number * 2);
  }

  return newArray;
}

let multiplied = multiplyByTwo(numbers);
console.log("multiplied array", multiplied);

// trandform array with map with anonymous function
let multipliedMapAnonymous = numbers.map(function(number) {
  return number * 2;
});
console.log("multiplied with .map using anonymous", multipliedMapAnonymous);

// high order with arrow
// highly recommended to use
let multipliedMapArrow = numbers.map(number => number * 2);
console.log("multiplied with .map using arrow", multipliedMapArrow);

//
// -------------- FILTER -----------------
// used to filter elements in an array, it returns only the elements that passed the condition that we give

console.log("================= FILTER =====================");

function largerThanThree(array) {
  let newArray = [];
  for (const number of array) {
    if (number > 3) {
      newArray.push(number);
    }
  }
  return newArray;
}
let filteredArray = largerThanThree(numbers);
console.log("filtered array", filteredArray);

// filter array using .filter

// filter using anonymous
let filteredAnonymous = numbers.filter(function(number) {
  return number > 3;
});
console.log("filtered with .filter using anonymous", filteredAnonymous);
let filteredArrow = numbers.filter(x => x > 3);
console.log("filtered with .filter using arrow", filteredArrow);

//
// -------------- REDUCE -----------------
// accepts a function with two parameters as an argument and a starting value. This function aggregates multiple values from an array and returns only one value

console.log("================= REDUCE =====================");

function sum(array) {
  let sumTotal = 0;
  for (const number of array) {
    sumTotal += number;
  }
  return sumTotal;
}
let sumArray = sum(numbers);
console.log("sum of array", sumArray);

// sum using .reduce
let sumReduce = numbers.reduce((number, sum) => (sum += number), 0);
console.log("sum using .reduce", sumReduce);

//
// -------------- FOREACH -----------------
// runs a code for every element without any result in return

console.log("================= FOREACH =====================");

numbers.forEach(number => console.log(number + 3));

//
// -------------- SORT -----------------
// sorts an array

console.log("================= SORT =====================");

numbers.sort((number1, number2) => number2 - number1);
console.log("sort descendong", numbers);

numbers.sort((number1, number2) => number1 - number2);
console.log("sort ascendong", numbers);

//
// -------------- COPY OF AN ARRAY -----------------
// ways to copy an array
console.log("================= COPY ARRAY =====================");

const newNumbers = numbers;
console.log("newNumbers", newNumbers);
console.log("numbers", numbers);
console.log(" sorting");
newNumbers.sort((number1, number2) => number2 - number1);
console.log("newNumbers", newNumbers);
console.log("numbers", numbers);
// we do not make a copy of the students array in the newNumbers. We just pass a refference to the numbers array.
// bad way to copy an array

//
// brong back original array to normal
newNumbers.sort((number1, number2) => number1 - number2);

// introducing SPREAD operator
const newNumbers02 = [...numbers];
console.log("newNumbers", newNumbers02);
console.log("numbers", numbers);
console.log(" sorting");
newNumbers02.sort((number1, number2) => number2 - number1);
console.log("newNumbers", newNumbers02);
console.log("numbers", numbers);
// this is a good way to copy the array, we do not touch the original one
