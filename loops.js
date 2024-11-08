{
    function getSum(n){
        let sum = 0
        for(let i = 0; i<=n; i++){
            console.log("Sum = ${Sum}, i = $(i)")
            sum = sum + i 
        }
        return sum
    }
    console.log(getSum(2))

    function factorial(n){
        let fact = 1
        for( let i = 1; i<=n; i++){
            fact *=i
        }
        return fact
    }
    console.log(factorial( 6))



        function getEven(n){
            let fact = 1
            for(let e = 0; e<=n; e++)
                if(e % 2 == 0 ){
                    console.log(e)
                 }
        }
        getEven(20)
    }


