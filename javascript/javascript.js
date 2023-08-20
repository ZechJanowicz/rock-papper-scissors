var playerTally = 0;
var computerTally = 0;


/*Rock = 1 Scissors = 2 Paper = 3 */

let playerChoice = () => selection = prompt("Rock Paper or Scissors: ");

let computerChoice = () => compSelection = Math.floor(Math.random() *3 + 1);

function computerTranslated(){
    computerChoice();
    if (compSelection = 1) {
        compSelection = "Rock";
    }
    else if (compSelection = 2)
        compSelection = "Scissors";
    else if (compSelection = 3)
        compSelection = "Paper";

}

function game() {
playerChoice();
computerChoice();
if (selection.toLowerCase() === 'rock'&& compSelection == 2) {
    console.log(compSelection)
    console.log("You win! Computer chose Scissors!");
    ++playerTally;
}
else if (selection.toLowerCase() === 'scissors' && compSelection == 3) {
    console.log("You win! Computer chose Paper!");
    ++playerTally;
}
else if (selection.toLowerCase() === 'paper' && compSelection == 1) {
    console.log("You win! Computer chose Rock!");
    ++playerTally;
}
else if (selection.toLowerCase() === 'paper' && compSelection == 3) {
    console.log("You Drew! Computer chose Paper!");
}
else if (selection.toLowerCase() === 'Scissors' && compSelection == 2) {
    console.log(compSelection)
    console.log("You Drew! Computer chose Scissors!");
}
else if (selection.toLowerCase() === 'rock' && compSelection == 1) {
    console.log("You Drew! Computer chose Rock!");
}
else if (selection.toLowerCase() === 'rock' && compSelection == 3) {
    console.log("You lose! Computer chose Paper!");
    ++computerTally;
}
else if (selection.toLowerCase() === 'paper' && compSelection == 2) {
    console.log("You lose! Computer chose Scissors!");
    ++computerTally;
}
else {
    console.log(compSelection)
    computerTranslated();
    console.log(`You lose! Computer chose ${compSelection}`)
    ++computerTally
    return playerTally + computerTally
}
}



while (playerTally < 5 && computerTally < 5) {
    game();
    console.log(`Your score is ${playerTally}`)
    console.log(`Computer score it ${computerTally}`)
    if (playerTally == 5) {
        console.log("Congrats! You beat the computer!")
    }
    else if (computerTally == 5) {
        console.log("Oh no! You lost to the computer!")
    }
}