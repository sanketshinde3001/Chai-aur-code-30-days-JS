// Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.

class Person {
    constructor(name,age){
        this.name = name
        this.age = age
    }

    givedata(){
        console.log(`This is ${this.name} and having age ${this.age}`)
    }

}

class Student extends Person {
    constructor(name,id){
        super(name,20)
        this.studentId = id;
    }

    givedata(){
        console.log(`This is ${this.studentId} and having age ${this.age}`)
    }

}

const person1 = new Person('sanket',20)
const student1 = new Student("sanket",6)

person1.givedata()
student1.givedata()
