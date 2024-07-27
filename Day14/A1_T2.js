// Task 2: Add a method to the Person class that updates the age property and logs the updated age.

class Person {
    constructor(name,age){
        this.name = name
        this.age = age
    }

    getdata() {
        console.log(`Hey ,my age is ${this.age}`)
    }

    setdata(data) {
     this.age = data
    }
}

const person1 = new Person('sanket',20)

person1.getdata()
person1.setdata(50)
person1.getdata()