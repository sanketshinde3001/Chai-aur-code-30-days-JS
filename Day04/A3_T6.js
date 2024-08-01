// Task 6: Write a program to calculate the factorial of a number using a do...while loop.

function factorial(num) {
    let facto = 1

    do {
        facto*=num
        num--
        
    } while (num>0);

    console.log(facto)
}

factorial(6)