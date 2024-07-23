// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.


const obj = {
    id:6,
    name:"sanket",
    isPaid:false,
    sum:(a,b)=>{
        console.log(a+b)
    }
}

console.log(obj)
console.log(obj.id)
console.log(obj.name)
obj.sum(5,4)  // no need to log again 