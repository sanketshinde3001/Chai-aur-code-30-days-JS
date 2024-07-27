// Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.

import {sum,sub,mul,div} from './modules/A2_T3_m.mjs'

console.log("sum of 5 , 6 is - "+sum(5,6))
console.log("subtraction of 5 , 6 is - "+sub(5,6))
console.log("Multiplication of 5 , 6 is - "+mul(5,6))
console.log("Division of 5 , 6 is - "+div(5,6))