numbers = [10, 20, 20, 40, 50];

function findLargestArray(arr){
    let largest = arr[0];
    for (let i = 1; i< arr.length; i++){
        if (arr[i]>largest){
            largest = arr[i];
        }

    }
    return largest
}
console.log("The largest is:",findLargestArray(numbers));