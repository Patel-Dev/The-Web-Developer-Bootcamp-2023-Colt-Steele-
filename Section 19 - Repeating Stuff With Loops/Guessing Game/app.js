let maximum = parseInt(prompt("Please enter a maximum number."));

while (!maximum) {
    maximum = parseInt(prompt("Please enter a maximum number."));
}

const guessingNumber = Math.floor(Math.random() * maximum) + 1;

let guess = prompt("Guess the secret number!");
let attempts = 1;

while (parseInt(guess) !== guessingNumber) {
    if (guess === 'q') {
        break;
    }
    attempts++;
    if (guess < guessingNumber) {
        guess = parseInt(prompt("Too low! Try again."));
    }
    else if (guess > guessingNumber) {
        guess = parseInt(prompt("Too high! Try again."));
    }
}

if (guess === 'q') {
    console.log("OK, YOU QUIT!");
}
else {
    console.log("CONGRATS, YOU GOT IT!");
    console.log(`It took you ${attempts} tries!`)
}