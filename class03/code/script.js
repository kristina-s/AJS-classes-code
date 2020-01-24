// ---------------------------- Requests with JQUERY ------------------------------------

// JSON parse & JSON stringify

let academy = {
  name: "SEDC WebDevelopment",
  trainer: "Viktor Jakovlev",
  assistant: "Krisitna Spasevska",
  students: ["Bob Bobsky", "John Snow", "Timmy"],
  classroom: "Palmyra"
};
console.log(academy);

// turns javascript object into JSON
let academyJson = JSON.stringify(academy);
console.log(academyJson);

// turns JSON into a javascript object
let academyJsonBackToJSObject = JSON.parse(academyJson);
console.log(academyJsonBackToJSObject);

// ajax call with jquery

// bad way
// $(document).ready(function() {
//   let button = document.getElementById("sendRequest");
//   let elementToShowData = document.getElementById("person");
//   let responseObject = {};

//   button.addEventListener("click", function() {
//     $.ajax({
//       url: "https://swapi.co/api/people/4",
//       method: "GET",
//       success: function(response) {
//         console.log("Request successful!");
//         // let responseObject = JSON.parse(response);
//         // jquery does this for us
//         console.log(response);
//         responseObject = response;
//       },
//       error: function(response) {
//         console.log("The request has failed: " + response.status);
//       }
//     });

//     elementToShowData.innerHTML = "";
//     elementToShowData.innerHTML += `
//                 <p> Name: ${responseObject.name} </p>
//                 <p> Gender: ${responseObject.gender} </p>
//                 <p> Birthyear: ${responseObject.birth_year} </p>
//                 <p> Height: ${responseObject.height} </p>
//                 <p> Mass: ${responseObject.mass} </p>
//                 <p> Hair Color: ${responseObject.hair_color} </p>
//                 <p> Eye Color: ${responseObject.eye_color} </p>
//                 `;
//   });
// });

// okay way
// $(document).ready(function() {
//   let button = document.getElementById("sendRequest");
//   let elementToShowData = document.getElementById("person");

//   button.addEventListener("click", function() {
//     $.ajax({
//       url: "https://swapi.co/api/people/4",
//       method: "GET",
//       success: function(response) {
//         console.log("Request successful!");
//         // let responseObject = JSON.parse(response);
//         // jquery does this for us
//         console.log(response);
//         elementToShowData.innerHTML = "";
//         elementToShowData.innerHTML += `
//                     <p> Name: ${response.name} </p>
//                     <p> Gender: ${response.gender} </p>
//                     <p> Birthyear: ${response.birth_year} </p>
//                     <p> Height: ${response.height} </p>
//                     <p> Mass: ${response.mass} </p>
//                     <p> Hair Color: ${response.hair_color} </p>
//                     <p> Eye Color: ${response.eye_color} </p>
//                     `;
//       },
//       error: function(response) {
//         console.log("The request has failed: " + response.status);
//       }
//     });
//   });
// });

//good way (one of the best practice that we mention often)
// create a function for the printing

function printInfo(element, object) {
  element.innerHTML = "";
  element.innerHTML += `
                 <p> Name: ${object.name} </p>
                 <p> Gender: ${object.gender} </p>
                 <p> Birthyear: ${object.birth_year} </p>
                 <p> Height: ${object.height} </p>
                 <p> Mass: ${object.mass} </p>
                 <p> Hair Color: ${object.hair_color} </p>
                 <p> Eye Color: ${object.eye_color} </p>
                 `;
}

// $(document).ready(function() {
//   let button = document.getElementById("sendRequest");
//   let elementToShowData = document.getElementById("person");

//   button.addEventListener("click", function() {
//     $.ajax({
//       url: "https://swapi.co/api/people/4",
//       method: "GET",
//       success: function(response) {
//         console.log("Request successful!");
//         console.log(response);
//         printInfo(elementToShowData, response);
//       },
//       error: function(response) {
//         console.log("The request has failed: " + response.status);
//       }
//     });
//   });
// });

// ---------------------------- Requests with vanilla JS ------------------------------------
// call with fetch using plain javascript
// we don't need jquery here

let button = document.getElementById("sendRequest");

button.addEventListener("click", function() {
  fetch("https://swapi.co/api/people/4")
    .then(function(response) {
      let jsObject = response.json();
      console.log("We get a promise", jsObject);
      return jsObject;
    })
    .then(function(myObject) {
      console.log("Here we have the js object", myObject);
      let element = document.getElementById("person");
      printInfo(element, myObject);
    });
});
