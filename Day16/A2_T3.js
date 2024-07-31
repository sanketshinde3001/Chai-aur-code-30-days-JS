// Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.

sum = 0

function sumarray(arr,length) {
    console.log("here" + sum)
    if (length<=0) {
        console.log("mid - "+sum)
        return sum;
    }
    console.log("there" + sum)
    sum+=arr[length-1]
    return sum + sumarray(arr,length-1)
}

arr1=[1,2,3,4,5,6]

console.log("last - " + sumarray(arr1,6))