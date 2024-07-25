// Task 6: Create a promise that randomly resolves or rejects. Use . catch() to handle the rejection and log an appropriate message to the console.

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

newPromise.catch((e)=>{
    console.log(e)
})