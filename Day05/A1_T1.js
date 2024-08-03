// Task 1: Write a function to check if a number is even or odd and log the result to the console.

function checknum(num) {
    if (num % 2 === 0) {
        return 'Number is Even.'
    }
    return 'Number is Odd.'
}

const data = checknum(121)

console.log(data)