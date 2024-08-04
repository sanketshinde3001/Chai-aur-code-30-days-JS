// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.

const arr = [1,2,3,4,5]
let sum = 0
const arr1 = arr.reduce((sum,e)=> sum+e,0)

console.log(arr1)