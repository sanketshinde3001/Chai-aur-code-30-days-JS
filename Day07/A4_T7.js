// • Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.

const user = {
    title:'Wings of Fire',
    author:'APJ Abdul Kalam',
    year:2024,
    gettitle:function (){
        console.log(this.title)
    },
    getyear(){
        console.log(this.year)
    }
}

user.gettitle()
user.getyear()

