// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

function product(a,b=1) {
    return a*b
}

console.log(product(5,3))
console.log(product(5))