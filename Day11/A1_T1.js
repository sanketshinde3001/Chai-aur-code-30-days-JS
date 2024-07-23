// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.

const newpromise = new Promise((resolve,reject)=>{
    const temp = true
 

    if (temp) {
        setTimeout(()=>{resolve("Sucessful")},2000)
    } else {
        reject("Failure")
    }
})

newpromise
    .then(value=>console.log(value))
    .catch(error=>console.log(error))


    