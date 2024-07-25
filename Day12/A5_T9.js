// Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.

async function fun1() {
    try {
        const data = await fetch("url")
        if (!data.ok) {
            throw new Error("No Data Received")
        } 
        data = await data.json()
        console.log(data)

    } catch (error) {
        console.log(error.message)
    }
    
}

fun1()