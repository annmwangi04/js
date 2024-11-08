{
    function CalculateDiscount(purchaseAmount){
        let discount = 0

    if(purchaseAmount >= 100){
        return "20%"

    }else if(purchaseAmount >= 50){
        return " 10%"


    }else{
        return "0"

      }
    }
    let purchaseAmount = 1200
    let discount = 20
    CalculateDiscount(1000) 

        console.log(purchaseAmount +" is" + discount + "%")
}
