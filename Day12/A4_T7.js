// Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.

const newPromise = new Promise((resolve,reject)=>{
    const num = Math.random()
    if (num<0.5) {
        console.log("Promise is Resolved")
        resolve(5)
    } else {
        console.log("Promise is Rejected")
        reject("Show more than 0.5")
    }
})

async function fun1() {
    try {
    const data = await newPromise
    console.log(data)
    } catch (error) {
        console.log(error)
    }
}

fun1()