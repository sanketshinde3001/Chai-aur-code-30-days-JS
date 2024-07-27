// Task 7: Add a getter method to the Person class to return the full name (assume a FirstName and lastName property). Create an instance and log the full name using the getter.

class Person {
    constructor(fname,lname){
        this.fname = fname
        this.lname = lname
    }

    get data1(){
        return this.fname+" "+this.lname
    }

}

const person1 = new Person('sanket','shinde')

console.log(person1.data1)