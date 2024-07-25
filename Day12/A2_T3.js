// Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.

const temp = false

try {
    if (temp) {
        console.log("This is try block")
    } else {
        throw new Error("This Error is thrown by try")
    }
} catch (error) {
    console.log("This is catch block")
    console.log(error.message)
} finally {
    console.log("This is finally Block")
}