// Task 9: Use Promise. race to log the value of the first promise that resolves among multiple promises.


const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(10),1000)
})
const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(20),2000)
})
const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(5),500)
})


Promise.race([p1,p2,p3]).then((data)=>console.log(data))
.catch((error)=>console.log(error))