// Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.

function outsside(fn) {
    const cache = {}

    return function (...args) {
        const key = JSON.stringify(args)
    }
}