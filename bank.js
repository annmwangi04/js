{
    let person1 = {
        name : "Amos",
        accountNumber: "12345678400",
        balance : 500000,
        getBalanceAfter: function(deposit){
            return this.balance + deposit

        },
        getWithdrawlBalAfter: function(withdraw){
            return this.balance - withdraw
        },
        getTransferBalAfter: function(transfer){
            return this.balance - transfer
        }
    }

    console.log(person1.getBalanceAfter(100000))
    console.log(person1.getWithdrawlBalAfter(20000))
    console.log(person1.getTransferBalAfter(50000))
}