let maximum = parseInt(prompt('Enter the maximum number'));
while (!maximum) {
    maximum = parseInt(prompt('Enter a valid number!'));
}


const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt('Please enter your first guess!'));
while (guess !== targetNum) {
    if (guess > targetNum) {
        guess = parseInt(prompt('Too High! Try Again:'));
    } else {
        guess = parseInt(prompt('Too Low! Try Again:'));
    }
}

alert('You Got It!!!')