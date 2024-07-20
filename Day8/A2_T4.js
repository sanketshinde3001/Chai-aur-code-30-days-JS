// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.

const obj = {
    id: 6,
    book_name:"Book 1",
    author_name:"Author 1"
}

const {book_name , author_name} = obj

console.log(book_name , author_name)


//save them in another variable
const {book_name:book , author_name:author} = obj

console.log(book , author)