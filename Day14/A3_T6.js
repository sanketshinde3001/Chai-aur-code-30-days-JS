// Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.

class Student{
    static data = 5

    constructor(name,id){
        this.name = name
        this.studentId = id;
        Student.data++
    }

    givedata(){
        console.log(`Total ${Student.data} studnents`)
    }

}


const student1 = new Student("sanket",6)

console.log(Student.data )
const student2 = new Student("sanket",6)

console.log(Student.data )