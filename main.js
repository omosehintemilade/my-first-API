let button = document.getElementById('button')
button.addEventListener('click', start)

async function start() {
    try {
        let response = await fetch('https://icanhazdadjoke.com', {
            headers: {
                Accept: 'application/json'
            }
        });
        let data = await response.json()
        console.log(data);
        displayJokes(data.joke)
    } catch {
        console.log('There was an error loading this page');
    }


}
// start()

function displayJokes(displayJokesParameter) {
    document.querySelector('.jokes-paragraph').innerHTML = displayJokesParameter

}