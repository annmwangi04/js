{   function changeHeadings(){
    let mainHeading = document.getElementById("myHeading")
    if ( mainHeading.innerText== "You changed me")
        mainHeading.innerText = "Dom"
    mainHeading.style.color = "blue"
}
    let myButton =document.getElementById("changeHdBtn")
    myButton.addEventListener("click",changeHeadings)

    function changeH2(text){
        let heading2 = document.getElementById("changeH2")
        heading2.innerText = text
    }
    let heading2Btn = document.getElementById("changeH2")
    heading2Btn.addEventListener("click",()=>{
        changeH2("Hello World!")
    })
}