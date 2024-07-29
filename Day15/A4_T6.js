// • Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
var arr = []
const myModule = (function(){

    function add(num){
        arr.push(num)
    }

    function remove(){
        arr.pop()
    }

    return {
        additem: (num)=>{
            add(num)
        },
        removeitem: (num)=>{
            remove()
        },
        showitems: ()=>{
            console.log(arr)
        }
    }
})()

myModule.additem(5)
myModule.showitems()

myModule.additem(9)
myModule.showitems()

myModule.additem(3)
myModule.showitems()

myModule.removeitem()
myModule.showitems()

