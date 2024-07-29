// Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.

function outerfunction(name){
    let id = 0;

    return (name)=>{
        id++;
        console.log(id+" "+name)
    }

}

const user = outerfunction()

user("sanket")
user("vaishnavi")
