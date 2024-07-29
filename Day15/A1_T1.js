// Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.

function outerfunction() {
    let temp = "This is sample text"

    function innerfunction() {
        console.log(temp)
    }

    return innerfunction
}

const tempfun = outerfunction()

tempfun()