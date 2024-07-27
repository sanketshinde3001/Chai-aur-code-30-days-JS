// Task 3: Define a class Student that extends the Person class. Add a property stucentld and a method to return the student ID. Create an instance of the Student class and log the student ID.

class Person {
    constructor(name,age){
        this.name = name
        this.age = age
    }

}

class Student extends Person {
    constructor(name,id){
        super(name,20)
        this.studentId = id;
    }

    getid(){
        return this.studentId
    }

}


const student1 = new Student("sanket",6)


console.log(student1.getid())


