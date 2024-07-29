// Tas 4: Create a closure that captures a user's name and returns a function that greets the user by name 

function outer(name) {
    
    return (name)=>{
        return console.log(`Hello ${name}, Welcome to india `)
    }
}

const greet = outer()

greet('sanket')
greet('vaishnavi')

