// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.


const user = {
    title:'Wings of Fire',
    author:'APJ Abdul Kalam',
    year:2024,
    updateyear(ip){
        this.year=ip
    }
}

console.log(user.year)
user.updateyear(2020)
console.log(user.year)
