// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.


async function fun1(url) {
    fetch(url)
    .then((data) => {
      if (!data.status) {
        throw new Error("Server Issue");
      }
      return data.json();
    })
    .then(data=>console.log(data))
    .catch(error=>console.log(error));
            
}

fun1("https://jsonplaceholder.typicode.com/todos/1")

