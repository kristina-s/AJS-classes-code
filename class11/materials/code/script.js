// function Dog(name, color, age, favoriteFood) {
//   this.name = name === undefined ? "unnamed" : name; // in case tehre is no name
//   this.color = color;
//   this.age = age;
//   this.hasOwner = false; // default value for all
//   this.favoriteFood =
//     favoriteFood === undefined ? [new Food("Bacon", "Red")] : favoriteFood;
//   this.bark = function() {
//     console.log("BARK BARK BARK");
//   };
//   this.eat = function(food) {
//     this.favoriteFood.forEach(fav =>
//       fav.name.toLowerCase() === food.name.toLowerCase()
//         ? console.log("*My favorite!*")
//         : ""
//     );
//     console.log("NOM NOM NOM");
//   };
// }

// let sparky = new Dog("Sparky", "Brown", 1, [
//   new Food("apple", "red"),
//   new Food("Beef", "Red")
// ]);
// let doggy = new Dog(); // will have name unnamed
// sparky.bark();
// doggy.bark();
// console.log(sparky);
// console.log(sparky.favoriteFood[0].name);
// console.log(doggy);
// console.log(doggy);
// sparky.eat(new Food("apple", "green"));
// console.log(new Food("apple", "red") === new Food("apple", "red"));

// function Food(name, color) {
//   this.name = name;
//   this.color = color;
// }

// // EXERCISE
// function Academy(name, students, subjects, start, end) {
//   this.name = name;
//   this.students = students === undefined ? [] : students;
//   this.subjects = subjects === undefined ? [] : subjects;
//   this.start = new Date(start);
//   this.end = new Date(end);
//   this.numberOfClasses = this.subjects.length * 10;
//   this.printStudents = function() {
//     this.students.forEach(student => {
//       console.log(student);
//     });
//   };
//   this.printSubjects = function() {
//     this.subjects.forEach(subject => {
//       console.log(subject);
//     });
//   };
// }

// function Subject(title, isElective, academy, students) {
//   this.title = title;
//   this.numberOfClasses = 10;
//   this.isElective = isElective;
//   this.academy = academy;
//   this.students = students;
//   this.overideClasses = function(classes) {
//     this.numberOfClasses = classes <= 3 ? console.log("error") : classes;
//   };
// }

// function Student(firstName, lastName, age) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.completedSubjects = [];
//   this.academy = null;
//   this.currentSubject = null;
//   this.startAcademy = function(someAcademy) {
//     this.academy = someAcademy;
//     someAcademy.students.push(this);
//   };
//   this.startSubject = function(someSubject) {
//     if (this.academy === null) {
//       console.log("You can't enrol on a subject without academy!");
//     } else if (
//       this.academy.subjects.filter(sub => sub.title === someSubject.title) ===
//       []
//     ) {
//       console.log("There is no subject like that in your academy!");
//     } else if (this.currentSubject !== null) {
//       this.completedSubjects.push(this.currentSubject);
//       this.currentSubject = someSubject;
//       someSubject.students.push(this);
//     } else {
//       this.currentSubject = someSubject;
//       someSubject.students.push(this);
//     }
//   };
// }

// let javascript = new Subject("javascript", false, undefined, []);
// let html = new Subject("html", false, undefined, []);
// let cSharp = new Subject("C#", false, undefined, []);
// let codeCademy = new Academy(
//   "Code",
//   [],
//   [javascript, html, cSharp],
//   "12/10/2019",
//   "12/10/2020"
// );
// let bob = new Student("Bob", "Bobsky", 35);
// let jill = new Student("Jill", "Riely", 29);
// // console.log(codeCademy);
// // console.log(javascript);
// // console.log(html);
// // console.log(cSharp);
// // console.log(bob);
// // console.log(jill);
// // codeCademy.printStudents();
// // codeCademy.printSubjects();
// // cSharp.overideClasses(8);
// bob.startAcademy(codeCademy);
// // bob.startSubject(javascript);
// bob.startSubject(javascript);
// bob.startSubject(cSharp);
// bob.startSubject(html);
// console.log(bob);

// -------------- DESTRUCTURING -------------------
// Destructuring simply implies breaking down a complex structure into simpler parts.
// In JavaScript, this complex structure is usually an object or an array.

// --------------- object destructuring -----------------
const person = {
  name: "Kristina",
  lastname: "Spasevska",
  age: 32,
  job: "web developer"
};

// const personName = person.name;
// const personLastname = person.lastname;

// with destructuring
const { name, lastname } = person;
// case sensitive properties!!

console.log(name, lastname);

// with custom names
//const { name: firstName, lastname: lastName } = person;
// we take out variables with values
// console.log(firstName, lastName);

// --------------- default values -----------------
const { name: firstName, lastname: lastName, isLazy = true } = person;
console.log(firstName, lastName, isLazy);

// --------------- array destructuring -----------------
const hobbies = ["Reading", "Hiking", "Sports"];

const hobby1 = hobbies[0];
const hobby2 = hobbies[1];

// with destructuring
const [hobby01, hobby02] = hobbies;

console.log(hobby01, hobby02);

// ----------------- OBJECT METHODS ----------------------

let dog = {
  isHappy: true,
  bark: function() {
    console.log("BARK BARK BARK!");
  }
};

// --------- Object.create() ------------------
// Create is a method that accepts an object as a parameter and will return a new object with the inherited entities from the object passed as the argument.
let barnie = Object.create(dog); // barnie has everything dog has
barnie.name = "Barnie";
barnie.color = "White";
console.log("Object.create", barnie);

// --------- Object.assign() ------------------
// Assign is a method that can merge two objects in to one. It accepts two objects and it tries to merge the second object in to the first one.

let addressInfo = {
  street: "Dogge Street",
  streetNumber: 24,
  contactPerson: "0703452323"
};

let barnieChip = Object.assign(barnie, addressInfo); // copies from address to barnie
console.log("Object.assign", barnie);

let anotherAddress = {
  street: "Other Street",
  streetNumber: 12,
  contactPerson: "072990002"
};

let barnieChipUpdate = Object.assign(barnieChip, anotherAddress); // overrides address values
console.log("Object.assign", barnie);

// --------- Object.Keys() & Object.values() ------------------
// The keys method returns all the property and method names of our object in an array.

const barnieKeys = Object.keys(barnie);
console.log(barnieKeys);

const barnieValues = Object.values(barnie);
console.log(barnieValues);

// ----------- Object.entries() -------------------
//  It returns an array of arrays that have a key and value pair. Basically it returns the keys and the values in smaller arrays of 2 elements.
const barnieEntries = Object.entries(barnie);
console.log(barnieEntries);

// -------------- Dynamically create properties ------------
let newDog = {};
let nameProperty = "dogName";
newDog[nameProperty] = "Sniffy"; // will have dogName: Sniffy property

newDog["owner"] = "Kristina";
console.log(newDog);

// --------------- Manipulating the reading and writing accessibility of entities ---------

// -------------- Object.freeze() --------------
// The freeze method allows us to completely lock our object.
// This means that adding new properties or methods is not available.
//  It also means that we can't change the values of our properties and methods
Object.freeze(barnie);
barnie.friend = "Sparky";
console.log(barnie.friend); // barnie stays the same
barnie.name = "Bob";
console.log(barnie.name); // barnie.name is still barnie
console.log(Object.isFrozen(barnie)); // true

// -------------- Object.seal() --------------
// The seal method allows us to lock the structure of our object.
// This means that we can't add new properties or methods, but we can change the existing ones.
const myPuppy = barnie;
Object.seal(myPuppy);
myPuppy.friend = "Barnie";
console.log(myPuppy.friend); // dog is still the same
myPuppy.name = "Bill";
console.log(myPuppy.name); // the name is changed to Bill
console.log(Object.isSealed(myPuppy)); // true
