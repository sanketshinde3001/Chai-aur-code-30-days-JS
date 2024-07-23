// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error usin . catch() .

const newpromise = new Promise((resolve,reject)=>{
    const temp = false
 
    if (temp) {
        resolve("Sucessful")
    } else {
        setTimeout(()=>{reject("Failure")},2000)
    }
})

newpromise
    .then(value=>console.log(value))
    .catch(error=>console.log(error))


    