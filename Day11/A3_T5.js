// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.


async function fun1() {
    const newPropmise = new Promise((resolve,reject)=>{
        setTimeout(()=>reject("Error"),1000)
    })
    try {
        let response = await newPropmise
        console.log(response)
    } catch (error) {
        console.log(error)
    }

}

fun1()