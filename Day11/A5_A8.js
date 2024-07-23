// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.


const p1 = Promise.resolve(15)
const p2 = Promise.resolve(15)
const p3 = Promise.resolve(15)
// const p4 = Promise.reject("error by p4")

Promise.all([p1,p2,p3]).then((data)=>console.log(data))
.catch((error)=>console.log(error))
