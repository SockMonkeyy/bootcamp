const die1 = Math.floor(Math.random() * 6) + 1; // This includes the basics of math.floor and Math.random.
const die2 = Math.floor(Math.random() * 6) + 1;


let roll = `You rolled a ${die1} and a ${die2}. They sum to ${die1 + die2}` 
if (roll == 7 || roll == 11) {
    console.log('You Win');
}

else if (roll == 2 || roll == 12) {

    console.log('You Lose');
}
 else () {
    console.log('Roll Again')

}
