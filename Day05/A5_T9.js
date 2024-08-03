// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

function sum(fun,times,a,b) {
    for (let i = 0; i < times; i++) { 
        console.log(fun(a,b))
    }
    
}

const sumfun = (a,b)=>{
    return a+b
}

sum(sumfun,3,6,7)