// Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test.

function factorial(num) {
    if (num==0 || num == 1) {
        return 1
    }

    return num * factorial(num-1)
}



console.log(factorial(5))
console.log(factorial(50))
console.log(factorial(20))