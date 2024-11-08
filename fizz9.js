{
    function fizzBuzz(n){
        for(let i = 0; i <= n; i++){
            if (i % 10 === 0){
                console.log('fizzBuzz');
            }else if (i % 5 === 0){
                console.log("fizz");
            }else{
                console.log(i)
            }   

        }
   }
   fizzBuzz(40)
}