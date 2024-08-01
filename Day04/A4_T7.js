// Task 7: Write a program to print a pattern using nested for loops:


let num = 5

for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write(' * ');
    }
    console.log()
}
