// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1 . Log the result of calling this function with and without the second parameter.

function product(num1,num2=5){
    console.log(num1*num2)
}

product(6,4) //with both
product(6)   // without both