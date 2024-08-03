// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

const cfind = (str,char)=>{
    for (let i = 0; i < str.length; i++) {
        if (str[i] == char) {
            return true
        }
    }
    return false
}

console.log(cfind("This is my name",'i'))