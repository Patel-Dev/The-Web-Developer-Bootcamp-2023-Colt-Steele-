let player1 = {
    score: 0,
    button: document.querySelector("#button1"),
    display: document.querySelector("#score1")
}

let player2 = {
    score: 0,
    button: document.querySelector("#button2"),
    display: document.querySelector("#score2")
}

const resetGame = document.querySelector("#reset")
const scoreSelect = document.querySelector('#scoreSelect')
let winningScore = 3;
let isGameOver = false;

const updateScores = (player, opponent) => {
    if (!isGameOver) {
        player.score++;
        player.display.textContent = player.score;

        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add("has-text-success");
            opponent.display.classList.add("has-text-danger");
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
    }
}

const reset = () => {
    for (let p of [player1, player2]) {
        p.score = 0;
        p.display.classList.remove("has-text-danger", "has-text-success");
        p.display.textContent = 0;
        p.button.disabled = false;
    }
    isGameOver = false;
}

button1.addEventListener('click', () => {
    updateScores(player1, player2);
})

button2.addEventListener('click', () => {
    updateScores(player2, player1);
})

resetGame.addEventListener('click', reset)

scoreSelect.addEventListener('change', () => {
    winningScore = parseInt(scoreSelect.value);
    reset();
})