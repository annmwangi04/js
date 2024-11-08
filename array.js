numbers = [10, 20, 20, 40, 50];

function averageOfArray(n){
    if (n.length === 0) return 0;

    let sum = 0
    for (let i = 0; i < n.length; i++){
        sum += n[i];
    }
    let averge = sum / n.length;
    return averge;


    //function Avg(arr) {
        //let sum = 0;
        //for (let i = 0; i < arr.length; i++) {
            //sum += arr[i];
        //return sum / arr.length;
        //console.log("The average is:",averageOfArray(numbers));
    
}
    console.log("The average is:",averageOfArray(numbers));
    //const arr = [10, 20, 30, 40, 50];
    //const average = Avg(arr);
    //console.log("Average:", average);
    
    