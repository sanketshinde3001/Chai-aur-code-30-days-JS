// Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.

function maxelem(arr,length,max=0) {
    if (length === 0) {
        return max;
    }
    if (max>arr[length-1]) {
        return maxelem(arr,length-1,max)
    }
    max = arr[length-1]
    return maxelem(arr,length-1,max)
}

console.log(maxelem([100,2,30,24,5,600],6))


// function findMax(arr, length) {
//     // Base case: If the array has only one element, return that element
//     if (length === 1) {
//         return arr[0];
//     }

//     // Recursive case: Find the maximum between the last element and the maximum of the rest
//     return Math.max(arr[length - 1], findMax(arr, length - 1));
// }

// const arr = [100, 2, 30, 24, 5, 6];
// console.log("Maximum element:", findMax(arr, arr.length)); // Output: 100
