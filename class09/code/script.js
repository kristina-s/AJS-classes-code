let list = document.querySelector("ul");

let showInfo = array => {
  list.innerHTML = "";
  array.forEach(element => {
    list.innerHTML += `
          <li>Username: ${element.username}, Email: ${element.email}</li>
          `;
  });
};

// request using fetch with callbacks
function getDataFetch() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => showInfo(data))
    .catch(error => console.log(error.message))
    .finally(() => console.log("Everything is done at: " + new Date()));
}
// getDataFetch();
// -----------------------------------------

// request fetch in async function
async function getDataAsyncFetch() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await response.json();
  // console.log(data);

  return data;
}
// getDataAsyncFetch();

// storing the result
let doSomethingWithResults = async () => {
  let dataFromAPI = await getDataAsyncFetch();
  console.log(dataFromAPI);
  showInfo(dataFromAPI);
};

doSomethingWithResults();
