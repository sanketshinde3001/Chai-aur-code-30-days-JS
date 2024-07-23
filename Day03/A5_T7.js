// • Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

let year = 2100;

if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    console.log("It is a leap year");
} else {
    console.log("Not a leap year");
}
