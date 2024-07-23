// • Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

function restop(name,...subjectmarks){
    console.log(name)
    let sum = 0
    for (let x of subjectmarks){
        sum += x       
    }
    console.log("Subject Marks sum is "+sum)
}

restop("sanket",90,80,100,95,85)

