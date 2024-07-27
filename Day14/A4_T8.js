// Task 8: Add a setter method to the Person class to update the name properties (FirstName and lastName ). Update the name using the setter and log the updated full name.

class Person {
    constructor(fname,lname){
        this.fname = fname
        this.lname = lname
    }

    get data1(){
        return this.fname+" "+this.lname
    }
    set data1(name1){
        const[fname,lname] = name1.split(" ")
        this.fname = fname
        this.lname = lname
    }

}

const person1 = new Person('sanket','shinde')

console.log(person1.data1)

person1.data1='vaishnavi raykar'

console.log(person1.data1)
