function computerPlay() {
  let generatedNumber = Math.floor(Math.random()*5)
  if (generatedNumber < 1) {
      computerSelection = 'rock';
  } else if (generatedNumber < 2) {
      computerSelection = 'paper';
  } else if (generatedNumber < 3) {
      computerSelection = 'scissors';
  } else if (generatedNumber < 4) {
      computerSelection = 'lizard';
  } else if (generatedNumber < 5) {
      computerSelection = 'spock';
  }
  return computerSelection;
}

function playerSelection() {
  userInput = prompt('Enter your choice');
  userInput = userInput.toLowerCase();
  if (userInput == 'rock') {
    alert('You have selected rock.');
  } else if (userInput == 'paper') {
    alert('You have selected paper.');
  } else if (userInput == 'scissors') {
    alert('You have selected scissors.');
  } else if (userInput == 'lizard') {
    alert('You have selected lizard.');
  } else if (userInput == 'spock') {
    alert('You have selected Spock.');
  } else {
    alert('invalid selection');
  }
  return userInput;
}

// #3 When a player clicks on one of the selectionButtons it should run the playRound function.
function playRound(playerSelection, computerPlay) {
  if (playerSelection == 'paper') {
    if (computerSelection == 'paper') {
      alert('It\'s a draw!');
      return;
    } else if (computerSelection == 'rock') {
      alert('You win! Paper covers rock!');
      playerWon++;
      return;
    } else if (computerSelection == 'spock') {
      alert('You win! Paper disproves Spock!');
      playerWon++;
      return;
    } else if (computerSelection == 'scissors') {
      alert('You lose! Scissors cuts paper!');
      computerWon++;
      return;
    } else if (computerSelection == 'lizard') {
      alert('You lose! Lizard eats paper!');
      computerWon++;
      return;
    } else {
      return 'Oops! Something went wrong!';
    }
  } else if (playerSelection == 'rock') {
    if (computerSelection == 'rock') {
      alert('It\'s a draw!');
      return;
    } else if (computerSelection == 'lizard') {
      alert('You win! Rock crushes lizard!');
      playerWon++;
      return;
    } else if (computerSelection == 'scissors') {
      alert('You win! Rock crushes scissors!');
      playerWon++;
      return;
    } else if (computerSelection == 'paper') {
      alert('You lose! Paper covers rock!');
      computerWon++;
      return;
    } else if (computerSelection == 'spock') {
      alert('You lose! Spock vaporizes rock!');
      computerWon++;
      return;
    } else {
      return 'Oops! Something went wrong!';
    }
  } else if (playerSelection == 'scissors') {
    if (computerSelection == 'scissors') {
      alert('It\'s a draw!');
      return;
    } else if (computerSelection == 'paper') {
      alert('You win! Scissors cuts paper!');
      playerWon++;
      return;
    } else if (computerSelection == 'lizard') {
      alert('You win! Scissors decapitates lizard!');
      playerWon++;
      return;
    } else if (computerSelection == 'spock') {
      alert('You lose! Spock smashes scissors!');
      computerWon++;
      return;
    } else if (computerSelection == 'rock') {
      alert('You lose! Rock crushes scissors!');
      computerWon++;
      return;
    } else {
      return 'Oops! Something went wrong!';
    }
  } else if (playerSelection == 'lizard') {
    if (computerSelection == 'lizard') {
      alert('It\'s a draw!');
      return;
    } else if (computerSelection == 'spock') {
      alert('You win! Lizard poisons Spock!');
      playerWon++;
      return;
    } else if (computerSelection == 'paper') {
      alert('You win! Lizard eats paper!');
      playerWon++;
      return;
    } else if (computerSelection == 'rock') {
      alert('You lose! Rock crushes lizard!');
      computerWon++;
      return;
    } else if (computerSelection == 'scissors') {
      alert('You lose! Scissors decapitates lizard!');
      computerWon++;
      return;
    } else {
      return 'Oops! Something went wrong!';
    }
  } else if (playerSelection == 'spock') {
    if (computerSelection == 'spock') {
      alert('It\'s a draw!');
      return;
    } else if (computerSelection == 'scissors') {
      alert('You win! Spock smashes scissors!');
      playerWon++;
      return;
    } else if (computerSelection == 'rock') {
      alert('You win! Spock vaporizes rock!');
      playerWon++;
      return;
    } else if (computerSelection == 'lizard') {
      alert('You lose! Lizard poisons Spock');
      computerWon++;
      return;
    } else if (computerSelection == 'paper') {
      alert('You lose! Paper disproves Spock!');
      computerWon++;
      return;
    } else {
      return 'Oops! Something went wrong!';
    }
  }
}

// #1 Write a new function to replace game. When the game is started it should set rounds, playerWon, and computerWon to 0.
function game() {
  if (rounds < 5) {
    rounds++;
    alert('Starting round ' + rounds);
    playRound(playerSelection(), computerPlay());
    alertScore (playerWon, computerWon);
    game();
  } else if (rounds == 5) {
    alert('Game over!');
    if (playerWon == computerWon) {
      alert(`It's a draw! You tied with ${opponent}!`);
    } else if (playerWon > computerWon) {
      alert(`You win! You beat ${opponent}!`);
    } else if (playerWon < computerWon) {
      alert(`You lose! ${opponent} beat you!`);
    } else {
      alert('Oops! Something went wrong!');
    }
  } else if (rounds > 5) {
    alert('Oops! Something went wrong!');
  }
  rounds = 0;
  playerWon = 0;
  computerWon = 0;
}

// #2 Change the alertScore function to instead show the score on the page
function alertScore (playerWon, computerWon) {
  alert('Player Score: ' + playerWon + ` ${opponent}'s Score: ` + computerWon);
}

function pickOpponent () {
  let generatedNumber = Math.floor(Math.random()*10)
  if (generatedNumber < 1) {
    opponent = 'Leonard';
    alert(`You're opponent is ${opponent}!`)
  } else if (generatedNumber < 2) {
    opponent = 'Sheldon';
    alert(`You're opponent is ${opponent}!`)
  } else if (generatedNumber < 3) {
    opponent = 'Penny';
    alert(`You're opponent is ${opponent}!`)
  } else if (generatedNumber < 4) {
    opponent = 'Howard';
    alert(`You're opponent is ${opponent}!`)
  } else if (generatedNumber < 5) {
    opponent = 'Raj';
    alert(`You're opponent is ${opponent}!`)
  } else if (generatedNumber < 6) {
    opponent = 'Stuart';
    alert(`You're opponent is ${opponent}!`)
  } else if (generatedNumber < 7) {
    opponent = 'Leslie';
    alert(`You're opponent is ${opponent}!`)
  } else if (generatedNumber < 8) {
    opponent = 'Amy';
    alert(`You're opponent is ${opponent}!`)
  } else if (generatedNumber < 9) {
    opponent = 'Bernadette';
    alert(`You're opponent is ${opponent}!`)
  } else if (generatedNumber < 10) {
    opponent = 'Emily'
    alert(`You're opponent is ${opponent}!`)
  } else {
    alert('Oop! Something went wrong!');
  }
}

function updateMessage (message) {
  let gameMessages = document.querySelector('#gameMessages');
  gameMessages.textContent = message;
}

function updatePlayerScoreboard (updatedScoreMessage) {
  let playerScoreboard = document.querySelector('#playerScoreboard');
  playerScoreboard.textContent = updatedScoreMessage;
}

function updateComputerScoreboard (updatedScoreMessage) {
  let computerScoreboard = document.querySelector('#computerScoreboard');
  
}

let rounds = 0;
let playerWon = 0;
let computerWon = 0;
let opponent = null;