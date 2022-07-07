const myBtn = document.querySelector('myBtn')
const die1 = Math.floor(Math.random() * 6) + 1;
const die2 = Math.floor(Math.random() * 6) + 1;
const rollOne = die1 + die2;
const point = rollOne;


let = rollOne;
if (rollOne == 7 || rollOne == 11) {
    myBtn.addEventListener('Play Again', rollOne);
    console.log("You rolled a `${rollOne}` You Win!");
} else if (rollOne == 2 || rollOne == 12) {
    myBtn.addEventListener('Play Again', rollOne)
    console.log("You rolled a " + rollOne + " You Lose");
} else {
    myBtn.addEventListener('Roll Again', rollOne)
    let roll2 = console.log("You rolled a " + rollOne + " roll again");
}

