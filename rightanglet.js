{
    
    function printNumbers(num1,num2){
        if(num1<num2){
            for( let i = num1; i<= num2; i++){
                let row ="";
             for( let k = num1; k<= i; k++){
                row +=k + "";
             }
                console.log(row)
            }
        }else{
            for( let i = num2; i<= num1; i++){
                let row ="";
                for( let k = num2; k<= i; k++){
                   row +=k + "";
                }
                console.log(row)
            }    
        }
    } 
    printNumbers(1,6);   
}