
const die1 = Math.floor(Math.random() * 6) + 1;
const die2 = Math.floor(Math.random() * 6) + 1;
let sum = die1 + die2;



switch (sum) {

    case 7: case 11:
        console.log(`You rolled a ${sum}. You Win!`);
        break;

    case 2: case 3: case 12:
        console.log(`You rolled a ${sum}. You Lose!`);
        break;

    default:
        point = sum;
        do {
            sum = die1 + die2;
            console.log("Sum:\t" + sum + "\n");

        } while (sum != 7 && sum != point);

        if (sum == point)
        console.log("Player wins.");
        else
        console.log("Player loses.");
       
}






   