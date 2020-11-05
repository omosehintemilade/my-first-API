let button = document.getElementById('button')
button.addEventListener('click', start)

async function start() {
    let response = await fetch('https://icanhazdadjoke.com', {
        headers: {
            Accept: 'application/json'
        }
    });
    let data = await response.json()
        // console.log(data);
    displayJokes(data.joke)
}
// start()

function displayJokes(displayJokesParameter) {
    document.querySelector('.jokes-paragraph').innerHTML = displayJokesParameter

}