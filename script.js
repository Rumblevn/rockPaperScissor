// console.log("helloe worldddd");

game();

function game() {
    var humanScore = 0;
    var computerScore = 0;
    var humanHand = "";
    var computerHand = "";
    var tempScore;

    for (let index = 0; index < 5; index++) {
        console.log("round: " + index);
        humanHand = prompt("Round " + (index+1) + ", state your hand:").toLowerCase();
        // humanHand = "rock"; //for fast debugging
        computerHand = getComputerChoice();
        tempScore = playRound(humanHand, computerHand);

        if (tempScore == -1) {
            computerScore++;
            console.log("at round " + (index+1) + " : computer win" );
        } else if (tempScore == 1) {
            humanScore++;
            console.log("at round " + (index+1) + " : human win" );
        } else {
            console.log("at round " + (index+1) + " draw")
        }
    }
    announceResult(computerScore, humanScore);

}

function playRound(playerChoice, computerChoice) {
    // return 0 for draw, -1 for computer win, 1 for human win
    var score;
    console.log("playerChoice: " + playerChoice);
    console.log("computerChoice: " + computerChoice);
    if (playerChoice === computerChoice) {
        score = 0;
    } else if (playerChoice === "rock") {
        if (computerChoice === "paper") {
            score = -1;
        } else score = 1;
    } else if (playerChoice === "payer") {
        if (computerChoice === "scissors") {
            score = -1;
        } else score = 1;
    } else if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
            score = -1;
        } else score = 1;
    } else {
        console.log("Invalid input, no score added");
    }
    // console.log("score: " + score);
    return score;
}

function announceResult(computerScore, humanScore) {
    if (computerScore > humanScore) {
        alert("computer won! " + computerScore + " - " + humanScore);
    } else if(computerScore < humanScore) {
        alert("human won! " + computerScore + " - " + humanScore);
    } else {
        alert("Its a draw! " + computerScore + " - " + humanScore)
    }
    console.log("Final score: " + computerScore + " - " + humanScore);
}

function getComputerChoice() {
    const ranNum = Math.floor(Math.random()*3 );
    if (ranNum == 0) {
        return "rock";
    } else if (ranNum == 1) {
        return "paper";
    } else return "scissors";
}