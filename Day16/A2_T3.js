// Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.


function sumarray(arr,length,sum=0) {
    if (length<=0) {
        return sum;
    }
    sum+=arr[length-1]
    return sumarray(arr,length-1,sum)
}

arr1=[1,2,3,4,5,6]

console.log("last - " + sumarray(arr1,6))



// function sumarray(arr, length) {
//     // Base case: If the array is empty (length is 0), return 0
//     if (length === 0) {
//         return 0;
//     }
//     // Recursive case: Return the last element plus the sum of the rest of the array
//     return arr[length - 1] + sumarray(arr, length - 1);
// }

// const arr1 = [1, 2, 3, 4, 5, 6];
// console.log("Sum of elements:", sumarray(arr1, arr1.length)); // Output: 21
