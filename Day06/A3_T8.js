// Task 8: Use the filter method to create a new array with only even numbers and log the new array

const arr = [1,2,3,4,5]

const arr1 = arr.filter((e)=>{
    return (e%2==0)
})

console.log(arr1)