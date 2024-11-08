{
    let heading = document.getElementById("myHeading")
    let myDiv = document.getElementById("myDiv")
    let myImg = document.getElementById("myImg")
    let body = document.body

    //body.style.backgroundImage = "../car.jpeg"
    for ( h of heading){
    h.style.color = "blue"
    h.style.fontSize ="3em"
    h.style.border = "solid"
    h.style.padding = "10px"
    h.style.marginBottom = "10px"

    }

   
   // myImg.src = "../2021 Bronco.jpg"

   // heading.innerHTML = "New Dom"
    //myDiv.innerHTML ="<p>Added Paragraph </p>"

    let newH1 = document.createElement("h1")
    newH1.innerText = "New H1"
    div.appendChild(newH1)

}