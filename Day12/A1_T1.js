// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.

function fun1() {
  const abc = false;
  if (abc) {
    console.log("ABC is true");
  } else {
    throw "This is False.";
  }
}

try {
  fun1();
} catch (error) {
  console.log(error);
}
