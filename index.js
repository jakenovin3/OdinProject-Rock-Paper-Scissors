
function getComputerChoice() {
    const options = ['Rock', 'Paper', 'Scissors'];
    let choice = Math.floor(Math.random() * options.length);
    return options[choice];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let capital = playerSelection.charAt(0).toUpperCase();
    let remaining = playerSelection.slice(1);
    playerSelection = capital + remaining;

    computerSelection = computerSelection.toLowerCase();
    capital = computerSelection.charAt(0).toUpperCase();
    remaining = computerSelection.slice(1);
    computerSelection = capital + remaining;

    const playerWinner = (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
                         (playerSelection === 'Paper' && computerSelection === 'Rock') ||
                         (playerSelection === 'Scissors' && computerSelection === 'Paper');

    const computerWinner = (computerSelection === 'Rock' && playerSelection === 'Scissors') ||
                           (computerSelection === 'Paper' && playerSelection === 'Rock') ||
                           (computerSelection === 'Scissors' && playerSelection === 'Paper');

    const tie = (computerSelection == 'Rock' && playerSelection == 'Rock') ||
                (computerSelection == 'Paper' && playerSelection == 'Paper') ||
                (computerSelection == 'Scissors' && playerSelection == 'Scissors');

    if(playerWinner) {
        return 'winner';
    }
    else if(computerWinner) {
        return 'loser';
    }
    else if(tie){
        return 'tie';
    }
}

function game() {
    console.log("Rock, Paper, Scissors!")

    let playerScore = 0;
    let computerScore = 0;

    for(let i = 1; i < 6; i++) {

        let playerChoice = prompt("Type Rock, Paper, or Scissors");
        let capital = playerChoice.charAt(0).toUpperCase();
        let remaining = playerChoice.slice(1);
        playerChoice = capital + remaining;
        let computerChoice = getComputerChoice();

        if(playRound(playerChoice, computerChoice) == 'winner') {
            console.log("Round: " + i + ") You win! " + playerChoice + " beats " + computerChoice)
            playerScore++;
        }
        else if(playRound(playerChoice, computerChoice) == 'loser'){
            console.log("Round: " + i + ") You lose! " + computerChoice + " beats " + playerChoice)
            computerScore++;
        }
        else if(playRound(playerChoice, computerChoice) == 'tie'){
            console.log("Round: " + i + ") Tie game! " + computerChoice + " ties with " + playerChoice + ". No points awarded!")
        }
    }

    console.log("Final Score:")
    console.log("You: " + playerScore)
    console.log("Computer: " + computerScore)
}

game();
