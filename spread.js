{
    person = {
        name: "Stephen",
        age: 22,
        hobby:"bike",
        prof: "SEng",
    }
    //let name = person.name
    //let age = person.age
    //let hobby =person.hobby
    //let prof = person.prof

    let { name, age, hobby, prof, salary=200 } = person

    console.log(name)
    console.log(age)
    console.log(hobby)
    console.log(prof)
    console.log(salary)

    function operate(){
        console.log("My name is ${object.name}.I am ${object.age} years old.I am ")
    }
}
