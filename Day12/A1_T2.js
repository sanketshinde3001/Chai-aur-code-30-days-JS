// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.


function iszero(a,b) {
    if(b===0){
        throw new Error("Can't Divide By Zero")
    } else {
        console.log("Division Sucessful " + a/b)
    }
}

try {
    iszero(5,0)
} catch (e) {
    console.log(e.message)
}

