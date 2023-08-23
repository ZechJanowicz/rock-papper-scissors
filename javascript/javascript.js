var playerTally = 0;
var computerTally = 0;

/*Rock = 1 Scissors = 2 Paper = 3 */




let computerChoice = () => compSelection = Math.floor(Math.random() *3 + 1);

function computerTranslated(){
    computerChoice();
    if (compSelection = 1) {
        compSelection = "Rock";
    }
    else if (compSelection = 2) {
        compSelection = "Scissors";
    }
    else if (compSelection = 3) {
        compSelection = "Paper";
    }
    }

    let rockString = () => answerRock = "rock";
    let paperString = () => answerPaper = "paper";
    let scissorString = () => answerScissor = "scissor";
    
    rockString();
    paperString();
    scissorString();
    
    
    function paper() {
        let pA = answerPaper;
        computerChoice();
        if (pA && compSelection == 1) {
            console.log("You win! Computer chose Rock!");
            ++playerTally;}
        else if (pA && compSelection == 3) {
            console.log("You Drew! Computer chose Paper!");}
        else if (pA && compSelection == 2) {
            console.log("You lose! Computer chose Scissors!");
            ++computerTally;
            }
            displayMessage();
            displayScore();
            console.log(`${playerTally} and ${computerTally}`)
            result();
            return computerTally + " " + playerTally
        }
    
    function rock() {
        let rA = answerRock;
        computerChoice();
        if ( rA && compSelection == 2) {
            console.log("You win! Computer chose Scissors!");
            ++playerTally;}
        else if (rA  && compSelection == 1) {
            console.log("You Drew! Computer chose Rock!");}
        else if (rA && compSelection == 3) {
            console.log("You lose! Computer chose Paper!");
            ++computerTally;
            }
            displayMessage();
            displayScore();
            console.log(`${playerTally} and ${computerTally}`)
            result();
            return computerTally + " " + playerTally
        }
    
    function scissors() {
        console.log(`${playerTally} and ${computerTally}`)
        computerChoice();
        if (answerScissor && compSelection == 3) {
            console.log("You win! Computer chose Paper!");
            ++playerTally;
        }
        else if (answerScissor && compSelection == 2) {
            console.log("You Drew! Computer chose Scissors!");
        }
        else {
            console.log(`You lose! Computer chose Rock`)
            ++computerTally
            }
            displayMessage();
            displayScore();
            console.log(`${playerTally} and ${computerTally}`)
            result();
            return computerTally + " " + playerTally
        }


function result() {
    if (playerTally === 5) {
        alert("Human wins!")
        playerTally = 0;
        computerTally = 0;
    }
    else if (computerTally === 5) {
        alert("Computer wins!")
        playerTally = 0;
        computerTally = 0;
    }
}

function displayMessage() {
    document.getElementById('msg').innerHTML =  `Human:-${playerTally}  Computer:-${computerTally}`
    var btn = document.getElementsByTagName('button');
}

function displayScore() {
    if (compSelection === 1) {
        let compChoice = "Rock"
        document.getElementById('scr').innerHTML = `Computer chose: ${compChoice}`
    }
    else if (compSelection === 2) {
        let compChoice = "Scissors"
        document.getElementById('scr').innerHTML = `Computer chose: ${compChoice}`
    }
    else {
        let compChoice = "Paper"
        document.getElementById('scr').innerHTML = `Computer chose: ${compChoice}`
    }
}





/*
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
*/