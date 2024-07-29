// Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.

function outerfunction() {
    let counter = 0

    return ()=>{
        counter++
        return counter
    }

}

const counter = outerfunction()

counter()
counter()
counter()
counter()

console.log(counter())

