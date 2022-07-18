var playAgain = true;
let yes = keepLooking;
let no = false;



while (input !== 'no' && input !== 'q') {
    let remaining = 10;
    let attempts = 1;
    let welcome = prompt('Welcome Please Enter your name: ');
    let maximum = parseInt(prompt(`Hi ${welcome}, Enter the maximum number`));
    while (!maximum) {
        maximum = parseInt(prompt('Enter a valid number!'));
    }


    const targetNum = Math.floor(Math.random() * maximum) + 1;
    let myNum = targetNum;

    let guess = parseInt(prompt(`${welcome} Please enter your first guess!`));

    while (parseInt(guess) !== targetNum) {
        if (guess === 'q') break;
        if (remaining === 1) break;
        attempts++;
        remaining--;
        if (guess > targetNum) {
            guess = prompt(`${guess} is Too High! You have ${remaining} attempts remaining. Try Again:`);
        } else {
            guess = prompt(`${guess} is Too Low! You have ${remaining} attempts remaining. Try Again:`);
        }
    }
    if (remaining === 1) {
        alert(`${welcome} GameOver!!!!! You've used all 10 attempts!!!!!! Your Number was ${myNum}`);
        let playAgain = prompt(`Play Again ${welcome}, yes or no?`);
        if (playAgain == 'no') {
            alert(`${welcome} thanks for playing!`)
            break;
        }
    }
    if (guess === 'q') {
        alert(`${welcome} thanks for playing!`)
    }
    if (guess === targetNum)
        alert(`${welcome}, You Got It!!! Your Number was ${myNum}. Number of attempts: ${attempts}.`);
    let playAgain = prompt(`Play Again ${welcome}, yes or no?`);
}