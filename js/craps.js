

{
    const die1 = Math.floor(Math.random() * 6) + 1;
    const die2 = Math.floor(Math.random() * 6) + 1;
    let rollDice = die1 + die2;
    let sum = die1 + die2;

    let rollOne = die1 + die2
    console.log(`Let\'s Play!`)
    if (rollOne == 7 || rollOne == 11) {
        console.log(`You rolled a ${rollOne}. You Win!`);
        console.log(`Play Again?`);
        return;
    }
    if (rollOne == 2 || rollOne == 3 || rollOne == 12) {
        console.log(`You rolled a ${rollOne}. You Lose`);
        console.log(`Play Again?`);
        return;
    }
    let newPoint = 0;
    while (newPoint != rollOne && newPoint != 7) {
        const die1 = Math.floor(Math.random() * 6) + 1;
        const die2 = Math.floor(Math.random() * 6) + 1;
        roll2 = sum;
        console.log(`Your point is ${rollOne}.`)
        console.log(`Please Roll Again`)
        return;
        
    }
    
    if (newPoint == roll2)
        console.log(`You rolled another ${sum}. You Win!`);
        
    else if (newPoint === 7)
    console.log(`You rolled a ${sum}. You Lose`);

}


