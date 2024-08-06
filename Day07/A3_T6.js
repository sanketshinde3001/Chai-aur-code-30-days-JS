// Task 6: Access and log the name of the library and the titles of all the books in the library.

const library = {
    libname:'Pune Main',
    liblocation:'Pune railway station',
    book:{
        name:"asdfsf",
        price:"sdfsfd"
    },
    books:[
        {
            title:'Wings of Fire',
            author:'APJ Abdul Kalam',
            year:2024
        },
        {
            title: "1984",
            author: "George Orwell",
            year: 1949
        },
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            year: 1960
        }
    ]
}

library.books.forEach((e)=>console.log(e.title))