const getSecondLargestNumber = (arr = [1,4,7,8,5,7]) =>{
    let largestNumber = arr[0];
    let secondLargestNumber = arr[0];

    for (let i = 0; i < arr.length; i++){
        if (arr[i] > largestNumber){
            secondLargestNumber = largestNumber;
            largestNumber = arr[i];
        }else if (arr[i] == largestNumber){
            continue;    

        } else if (arr[i] > secondLargestNumber){
            secondLargestNumber = arr[i];

        }

    }
    return secondLargestNumber;

}
console.log(getSecondLargestNumber())