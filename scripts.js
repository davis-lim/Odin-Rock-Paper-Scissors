let computerScore = 0;
let playerScore = 0;


function getComputerChoice() {
    var array = ['Rock', 'Paper', 'Scissors'];
    var randomChoice = array[Math.floor(Math.random()*array.length)];
    return randomChoice;
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection.toUpperCase() === "ROCK" && computerSelection === "Scissors") || (playerSelection.toUpperCase() === "PAPER" && computerSelection === "Rock") || (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "Paper")) {
        ++playerScore;
        alert(`You Win! ${playerSelection} beats ${computerSelection}`);
    } else if ((playerSelection.toUpperCase() === "ROCK" && computerSelection === "Paper") || (playerSelection.toUpperCase() === "PAPER" && computerSelection === "Scissors") || (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "Rock")) {
        ++computerScore;
        alert(`You Lose! ${computerSelection} beats ${playerSelection}`)
    } else if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        alert("Tie!")
    } else {
        alert("Please input either Rock, paper or scissors!")
    }
}



function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter your Choice");
        const computerSelection = getComputerChoice();
        playRound(playerSelection,computerSelection);
       
    }
    if (playerScore > computerScore) {
        alert(`Game over, You win! Score: ${playerScore}/5`);
    } else {
        alert(`Game over, You lose:( Score: ${playerScore}/5`)
    }
}

game();


