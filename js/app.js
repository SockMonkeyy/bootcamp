
const buttons = document.getElementById('btn');
const dealer = document.getElementById('dealer');
const player = document.getElementById('player');
const allBtns = document.getElementsByClassName("button1");

buttons.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("btn").click();
    }
  });



btn.addEventListener('click', function () {
    randomColor()
    for (let i = 0; i < allBtns.length; i++) {
        allBtns[i].style.backgroundColor = newColor2;
    }
    
            player.style.backgroundColor = newColor1;
    dealer.style.backgroundColor = newColor1;
    
    document.body.style.backgroundColor = newColor;

    buttons.style.backgroundColor = newColor1;
    console.log(allBtns);
    console.log(`Body BG ${newColor} Player/Dealer BG ${newColor1}`)
    document.getElementById('jordan').innerHTML = 'Jordan is ugly';
    document.getElementById('jeniya').innerHTML = 'Jeniya is cute';
    
})

// Execute a function when the user presses a key on the keyboard


const randomColor = () => {
    

    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    const r1 = Math.floor(Math.random() * 255);
    const g2 = Math.floor(Math.random() * 255);
    const b3 = Math.floor(Math.random() * 255);

    const r2 = Math.floor(Math.random() * 255);
    const g3 = Math.floor(Math.random() * 255);
    const b4 = Math.floor(Math.random() * 255);

    const newColorTotal = r + g + b;
    const newColorTotal1 = r1 + g2 + b3;
    const newColorTotal2 = r2 + g3 + b4;

    if (newColorTotal <= 325) {
        document.body.style.color = 'rgb(255,255,255)'
    }
    else
        document.body.style.color = 'rgb(0,0,0';

    if (newColorTotal1 <= 325) {
        (dealer.style.color = 'rgb(255,255,255)',
            player.style.color = 'rgb(255,255,255)',
            buttons.style.color = 'rgb(255,255,255)')
    }
    else
        (dealer.style.color = 'rgb(0,0,0',
            player.style.color = 'rgb(0,0,0',
            buttons.style.color = 'rgb(0,0,0)')

  

    newColor = `rgb(${r}, ${g}, ${b})`;
    newColor1 = `rgb(${r1}, ${g2}, ${b3})`;
    newColor2 = `rgb(${r2}, ${g3}, ${b4})`;

}




