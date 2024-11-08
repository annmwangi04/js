{
    function getLargestNum( n1,n2,n3){
        let LargestNum = n1;

        if(n2 > LargestNum){
            LargestNum = n2;
        }
        
        if (n3 >LargestNum){
            LargestNum = n3;
        }
        return LargestNum;

    }
    console.log(getLargestNum(20,60,80));
}