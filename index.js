
function getComputerChoice() {
    const options = ['Rock', 'Paper', 'Scissors'];
    let choice = Math.floor(Math.random() * options.length);
    return options[choice];
}

function playRound(playerSelection, computerSelection) {

	let playerScore = 0;
	let computerScore = 0;

	console.log("Player selection: " + playerSelection);
	console.log("Computer selection: " + computerSelection);

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
		console.log("Round: " + 1 + ") You win! " + playerSelection + " beats " + computerSelection);
		playerScore++;
	}
	else if(computerWinner) {
		console.log("Round: " + 1 + ") You lose! " + computerSelection + " beats " + playerSelection);
		computerScore++;
	}
	else if(tie){
		console.log("Round: " + 1 + ") Tie game! " + playerSelection + " ties with " + computerSelection + ". No points awarded!");
	}

	console.log("Final Score:");
	console.log("You: " + playerScore);
	console.log("Computer: " + computerScore);
}

function game() {
	console.log("Rock, Paper, Scissors!")

	let playerChoice;
	let computerChoice = getComputerChoice();

	const rockButton = document.querySelector('.rock-button');
	rockButton.addEventListener('click', function(e) {
		playerChoice = "Rock";
		playRound(playerChoice, getComputerChoice());
	});

	const paperButton = document.querySelector('.paper-button');
	paperButton.addEventListener('click', function(e) {
		playerChoice = "Paper";
		playRound(playerChoice, getComputerChoice());
	});

	const scissorsButton = document.querySelector('.scissors-button');
	scissorsButton.addEventListener('click', function(e) {
		playerChoice = "Scissors";
		playRound(playerChoice, getComputerChoice());
	});
}

game();
