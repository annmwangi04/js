{
    function CheckAge(age){
        if ( age <= 12){
            console.log("$5")

        }else if (age <= 18){
            console.log("$10")

        }else if ( age <= 60){
            console.log( "$20")    
    
        }else {
            console.log( "$15")
        }
      }
      CheckAge(5)
      CheckAge(15)
      CheckAge(30)
      CheckAge(100)
    }