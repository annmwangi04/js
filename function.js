{
    function getAreaOfTriangle(b,h){
        let a = (b*h) *0.5
        return a
    }

     console.log(getAreaOfTriangle(6,8))

     function getAreaOfTrapezium(a,b,h){
        let t = 0.5* (a + b) * h
        return t
     }

     console.log(getAreaOfTrapezium(13,12,10))

     function getTheHypoteneus(a,c){
        let h = (a*a + c*c) **0.5
        return h
    }
     console.log(getTheHypoteneus(3,4)) 

     
     function getValueOfx(a,b){
        let y = ( a**2 + b**2) **0.5
        return y
     }

     console.log(getValueOfx(2,6))
     
     function getFullName(FirstName, LastName){
        console.log("My name is " + FirstName + " " + LastName)
     }
     getFullName("Ann", "Wanjiru")

     function getParameter(l, w){
        let p = (l + w) * 2
        console.log(p) 
     }
     console.log(getParameter(20,10))


}
