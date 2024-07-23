// • Task 5: Write a program that uses a switch case to assign a grade A,B,C,D,F based on a score and log the grade to the console.

let Marks = 25


switch (true) {
    case (Marks>=90 && Marks<=100):
        console.log("A")
        break;
    case (Marks>=70 && Marks<90):
        console.log("B")
        break;
    case (Marks>=50 && Marks<70):
        console.log("C")
        break;
    case (Marks>=35 && Marks<50):
        console.log("D")
        break;
    case (Marks<35):
        console.log("F")
        break;
    default:
        console.log("Invalid Numbers")
        break;
}
