// Task 8: Write a function that takes a person's name and age and retums a greeting message. Provide a default value for the age.

function greet(name,age=21) {
    return `My name is ${name} & i'm ${age} years old`
}

console.log(greet('Sanket',20))
console.log(greet('Vaishnavi'))