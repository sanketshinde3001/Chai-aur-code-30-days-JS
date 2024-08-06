// Task 8: Use a for.. .in loop to iterate over the properties of the book object and log each propertv and its value.

const user = {
    title:'Wings of Fire',
    author:'APJ Abdul Kalam',
    year:2024
}

for (const key in user) {
    console.log(`${key}-${user[key]}`)
}
