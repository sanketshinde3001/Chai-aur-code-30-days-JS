// Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.

class Person {
    constructor(name,age){
        this.name = name
        this.age = age
    }

    getdata() {
        console.log(`Hey , its ${this.name} and my age is ${this.age}`)
    }
    static displayinfo() {
        console.log("This info is shown without any instacnce")
    }
}

Person.displayinfo()