// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.

function findmax(a,b) {
    if (a>b) {
        return a
    }
    return b
}

const data = findmax(12,50)
const data1 = findmax(120,50)

console.log(data)
console.log(data1)