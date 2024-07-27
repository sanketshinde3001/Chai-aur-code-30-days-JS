// Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.

import {data} from './modules/A1_T2_m.mjs'

console.log("Name - "+data.name)
console.log("Age - "+data.age)
console.log("Salary - "+data.isPaid)
console.log("Sum of 5 , 6 - "+data.sum(5,6))