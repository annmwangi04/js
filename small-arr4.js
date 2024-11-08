numbers = [10, 20, 20, 40, 50];

function findSmallestArray(arr){
    let Smallest = arr[0];
    for (let i = 1; i< arr.length; i++){
        if (arr[i]<Smallest){
            Smallest = arr[i];
        }

    }
    return Smallest
}
console.log("The Smallest is:",findSmallestArray(numbers));