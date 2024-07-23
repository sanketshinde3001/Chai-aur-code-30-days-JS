// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

function fetchdata(url) {
  const p1 = new Promise((resolve, reject) => {
    fetch(url)
      .then((data) => {
        if (!data.status) {
          throw new Error("Server Issue");
        }
        return data.json();
      })
      .then(data=>resolve(data))
      .catch(error=>reject(error));
  });

  p1.then(data=>console.log(data))
  .catch(error=>console.log(error))
}

fetchdata("https://jsonplaceholder.typicode.com/todos/1");

