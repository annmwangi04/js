function getSmallestNum(n1, n2, n3){
    let SmallestNum = n1;

    if (n2 < SmallestNum){
        SmallestNum = n2;
    }

    if (n3 < SmallestNum){
        SmallestNum = n3;
    }
    return SmallestNum;
}  
console.log(getSmallestNum(45,10,25));      