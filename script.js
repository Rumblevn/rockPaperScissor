// console.log("helloe worldddd");

game();

function game() {
    var humanScore = 0;
    var computerScore = 0;
    var humanHand = "";
    var computerHand = "";
    var tempScore;

    for (let index = 0; index < 5; index++) {
        // humanHand = prompt("Round " + (index+1) + " ,state your hand:").toLowerCase;
        humanHand = "rock";
        computerHand = getComputerChoice();
        tempScore = playRound(humanHand, computerHand);
        console.log(tempScore);
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


}

function playRound(playerChoice, computerChoice) {
    // return 0 for draw, -1 for computer win, 1 for human win
    var score = 5;
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
    }
    // console.log("score: " + score);
    return score;
}

function getComputerChoice() {
    const ranNum = Math.floor(Math.random()*3 );
    if (ranNum == 0) {
        return "rock";
    } else if (ranNum == 1) {
        return "paper";
    } else return "scissors";
}