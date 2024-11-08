{
    class BankAccount{
        constructor( id,branch,type){

            this.id = id
            this.branch = branch
            this.type = type
            this.balance = 0

        }
        deposit(amount){
            if (amount > 0){
                this.balance += amount
                console.log("You have sucessfully deposited $(amount).New balance is $(this.balance)")
            } else{
                console.log("Invalid amount")
            }
        }
         withdraw(amount){
                if (amount > 0){
                    this.balance -= amount
                    console.log("You have sucessfully withdrawn $(amount).New balance is $(this.balance)")
                } else{
                    console.log("Insufficient balance")
                }
            }
        }
        let account1 = new BankAccount (1,"Kencom","student")
        let account2= new BankAccount ( 1, "moi","savings")
        account1.deposit(5000)
        account2.withdraw(1500)
    }