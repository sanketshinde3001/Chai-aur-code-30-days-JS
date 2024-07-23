// • Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.


async function fun1(url) {
    let response = await fetch(url)
    response = await response.json()
    console.log(response)           
}

fun1("https://jsonplaceholder.typicode.com/todos/1")

