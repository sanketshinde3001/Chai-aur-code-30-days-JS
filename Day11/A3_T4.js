// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value

async function fun1() {
    const newPropmise = new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("Done"),1000)
    })
    let response = await newPropmise
    console.log(response)
}

fun1()