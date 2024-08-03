// Task IO: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

function sum(fun,fun1,a,b) {
    const data = fun(a,b)
    const data1 = square(data)
    console.log(data1)
}

const sumfun = (a,b)=>{
    return a+b
}

const square = (a)=>{
    return a*a
}

sum(sumfun,square,6,7)