// Task 1: Define a class Person with properties name and age , and a method to return a greeting message. Create an instance of the class and log the greeting message.

class Person {
    constructor(name,age){
        this.name = name
        this.age = age
    }

    getdata() {
        console.log(`Hey , its ${this.name} and my age is ${this.age}`)
    }
}

const person1 = new Person('sanket',20)

person1.getdata()
console.log(person1.name,person1.age)
