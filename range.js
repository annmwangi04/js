function dMaxMin(arr){
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    return max - min;
};
console.log(dMaxMin([45,60,10,15,35]))