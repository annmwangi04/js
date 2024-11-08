const getSecondSmallestNumber = (arr = [1,4,7,8,5,9]) =>{
    let smallestNumber = arr[0];
    let secondSmallestNumber = arr[0];

    for (let i = 0; i < arr.length; i++){
        if (arr[i] < smallestNumber){
            secondSmallestNumber = smallestNumber;
            smallestNumber = arr[i];    

        } else if (arr[i] < secondSmallestNumber){
            secondSmallestNumber = arr[i];

        }

    }
    return secondSmallestNumber;

}
console.log(getSecondSmallestNumber())