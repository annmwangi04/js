{
    class Car{
        constructor( name,year,color,cc){
            this.name = name
            this.year = year
            this.color = color
            this.cc = cc
        }
        start(){
            console.log("Starting car,done ")
        }

        stop(){
            console.log("Car stopped")
        }
    }
    let Car1 = new Car("Benz","2020","Silver",2500)
    let Car2 = new Car("Isuzu","2020","red",2000)

    console.log(Car1.name)
    console.log(Car2.name)

    Car1.start()
    Car2.stop()
}