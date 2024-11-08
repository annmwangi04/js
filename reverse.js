{
    let numbers = [ 10,20,30,40,50]
   //for( let i = numbers.length-1; i>=0;i--){
   for (let i=0; i<numbers.length; i++){
       console.log(numbers[i])
    }

    numbers = [34,67,89,43,56]
    let x = numbers.length-1
    while ( x >= 0 ){
        console.log(numbers[x]);
        x -=1
    }
}