// Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.

var arr = []

function outer(num) {
    function inner() {
        for (let i =0; i<num; i++) {
            arr[i] = ()=>{;
                    return i
                }       
        }
    }
    return inner
}

const num = 5

const temp = outer(num)
temp()

for (let i = 0; i < num; i++) {
    console.log(arr[i]())
}