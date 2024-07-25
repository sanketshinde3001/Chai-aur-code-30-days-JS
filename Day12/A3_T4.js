// Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.

class CustomError extends Error{
    constructor(message){
        super(message)
        this.name="CustomError"
    }
}

function fun1() {
    const abc = false;
    if (abc) {
      console.log("ABC is true");
    } else {
      throw new CustomError("This is error send using custom error")
    }
  }
  
  try {
    fun1();
  } catch (error) {
    console.log(error.message);
  }