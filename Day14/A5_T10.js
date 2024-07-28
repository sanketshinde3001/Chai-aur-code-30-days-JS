// • Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.

class Account {
    #Balance = 0
    constructor(money){
        this.#Balance = money
    }

    deposite(add){
        this.#Balance = this.#Balance + add
    }

    withdrawal(sub){
        this.#Balance = this.#Balance - sub
    }

    getinfo(){
        console.log(this.#Balance)
    }

}

const acc = new Account(500)

acc.getinfo()
acc.deposite(200)
acc.getinfo()
acc.withdrawal(300)
acc.getinfo()