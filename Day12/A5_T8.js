// • Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch() . Log an appropriate error message to the console.

fetch("any").then(data=>{
    if (!data.ok) {
        throw new Error ("No data Recived")
    }
    return data.json()
}) 
    .then((info)=>{
        console.log(info)
    })
    .catch(error =>{
        console.log("Error - "+error)
    })