// console.log("helloe worldddd");



var playerSelection = "ROCk";
playerSelection = playerSelection.toLowerCase();

console.log(playerSelection);
console.log(getComputerChoice());




function game() {
    var humanScore = 0;
    var computerScore = 0;
    var humanHand = "";
    var computerHand = "";

    for (let index = 0; index < 5; index++) {
        humanHand = prompt("Here go...").toLowerCase;
        computerHand = getComputerChoice();
        playRound(humanHand, computerHand);

    }

}

function playRound(playerChoice, computerChoice) {
    if (playerChoice) {
        
    }

}

function getComputerChoice() {
    const ranNum = Math.floor(Math.random()*3 );
    if (ranNum == 0) {
        return "rock";
    } else if (ranNum == 1) {
        return "paper";
    } else return "scissors";
}