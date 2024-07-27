// Task 7: Install a third-party module (e.g., axios ) using npm. Import and use this module to make a network request in a script.

import axios from "axios";

async function fun1() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    console.log(response.data)
}

fun1()