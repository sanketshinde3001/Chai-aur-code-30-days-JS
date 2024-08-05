// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.

const user = {
    title:'Wings of Fire',
    author:'APJ Abdul Kalam',
    year:2024,
    gettitle:function (){
        console.log(this.title)
    },
    getauthor(){
        console.log(this.author)
    }
}

user.gettitle()
user.getauthor()