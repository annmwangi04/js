{
    async function fetchJoke() {
        let setup = document.getElementById("setup")
        let punchline = document.getElementById("punchline")
        let response = await fetch( "https://official-joke-api.appspot.com/random_joke")
        let joke = await response.json()
        console.log(joke)
        setup.innerText = joke.setup
        punchline.innerText = joke.punchline
}

let jokeBtn = document.getElementById("jokeBtn")
jokeBtn.addEventListener("click",fetchJoke)

fetchJoke()

async function getImage() {
    let image = document.getElementById("dogImage")
    let response = await fetch("https://dog.ceo/api/breeds/image/random")
    let imageData = await response.json()
    image.src = imageData.message
    console.log(imageData)
}
let button = document.getElementById("dogBtn")
button.addEventListener("click",getImage)

getImage()
}