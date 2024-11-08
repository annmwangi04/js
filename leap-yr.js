{
 function leapYearFinder( year){
 if (( year % 4 == 0) && ( year % 100 != 0)){
    return year + " is a leap year";

 }  else if  ( year % 400 == 0){ 
    return year + " is a Leap Year";

 }  else {
    return year + " is  Not a Leap Year";
 }
}
 console.log(leapYearFinder(2024))
 console.log(leapYearFinder(1992))
 console.log(leapYearFinder(2002))
 console.log(leapYearFinder(3000))
} 