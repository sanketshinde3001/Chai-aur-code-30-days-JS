// Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.

// 1 ,1,2,3,5,8,13,21,34.....

function fibonacci(num) {
    if (num <= 1) {
        return num
    }
    return fibonacci(num-1) + fibonacci(num-2)
}

console.log(fibonacci(9))




