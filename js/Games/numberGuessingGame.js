
var playAgain = '';
let playerName = prompt('Welcome Please enter your name:');
while (playAgain !== 'no' || playAgain !== 'No') {
    let remaining = 10;
    let attempts = 1;
    let maximum = parseInt(prompt(`${playerName}, Enter the maximum number! The higher the number the harder it gets!`));
    while (!maximum) {
        maximum = parseInt(prompt(`That is not a valid number. ${playerName} Please enter a valid number`));
    }

    const targetNum = Math.floor(Math.random() * maximum) + 1;

    let guess = parseInt(prompt(`${playerName} Please Enter your first guess! The max is ${maximum}`));
    attempts = 1;

    while (parseInt(guess) !== targetNum) {
        if (guess === 'q' || guess === 'Q') break;
        if (remaining === 0) break;
        if (attempts === 9) {
            alert(`${playerName} YOU HAVE 1 ATTEMPT REMAINING!!!!!`)
        } {
            guess = prompt(`${guess} is Too High! You have ${remaining} attempts remaining. The Max Number ${maximum} Try Again:`);
        } else {
            guess = prompt(`${guess} is Too Low! You have ${remaining} attempts remaining. The Max Number ${maximum} Try Again:`);
        }
    }

    if (guess === 'q') {
        console.log("OK, YOU QUIT!");
        alert(`THANKS FOR PLAYING!!!`)
    }
    if (remaining === 1) {
        alert(`${playerName} GameOver!!!!! You've used all 10 attempts!!!!!! Your Number was ${targetNum}`);
    } else {
        console.log("CONGRATS YOU WIN!");
        console.log(`You got it! It took you ${attempts} guesses`);
        alert(`${playerName}, CONGRATS YOU WIN!!!!!!! Your number was ${targetNum}. You used ${attempts} attempt(s)`);
    }
    playAgain = prompt('Would you like to play again?');
} 
