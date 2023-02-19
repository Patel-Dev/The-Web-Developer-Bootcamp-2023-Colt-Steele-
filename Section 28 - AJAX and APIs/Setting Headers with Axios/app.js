const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");

button.addEventListener('click', () => {
    addNewJoke();
})

const getDadJoke = async () => {
    const config = { headers: { Accept: 'application/json' } };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
}

const addNewJoke = async () => {
    const joke = await getDadJoke();
    let newLI = document.createElement('LI');
    newLI.append(joke);
    jokes.append(newLI);
}