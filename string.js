{
    function printCharacters(str){
        for(let i = 0; i<str.length; i++){
            console.log(str[i])
        }
    }
   // printCharacters( "Wanjiru" );

    function sumEvenNumbers(n){
        let sum = 0;
        for ( let i= 0; i<=n; i++){
            if(i % 2 == 0){
                console.log(i)
            }
        }
    }
    //sumEvenNumbers(10) 
    
    function printNumbers(num1,num2){
        if(num1<num2){
            for( let i = num1 + 1; i< num2; i++){
                console.log(i)
            }
        }else{
            for( let i = num2 + 1; i< num1; i++){
                console.log(i)
            }    
        }
    }
    printNumbers(6,1)

}