// Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.

import * as math from './modules/A3_T5_m.mjs'


console.log("sum of 5 , 6 is - "+math.sum(5,6))
console.log("subtraction of 5 , 6 is - "+math.sub(5,6))
console.log("Multiplication of 5 , 6 is - "+math.mul(5,6))
console.log("Division of 5 , 6 is - "+math.div(5,6))