// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.


const arr1 = [1,2,3,4,5]
const arr2 = [6,7,8,9]

let arr3 = [...arr1,...arr2,10,11,12,13]

console.log(arr1)
console.log(arr2)
console.log(arr3)