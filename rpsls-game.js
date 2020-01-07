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

// #3 When a player clicks on one of the selectionButtons it should run the playRound function with the playerSelection filled in
function playRound(playerSelection, computerPlay) {
  computerPlay();
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
    // working on rock first. use it as a template for the others
  } else if (playerSelection == 'rock') {
    if (computerSelection == 'rock') {
      updateMessage('It\'s a draw!');
      updatePlayerScoreboard();
      updateComputerScoreboard();
      return;
    } else if (computerSelection == 'lizard') {
      updateMessage('You win! Rock crushes lizard!');
      playerWon++;
      updatePlayerScoreboard();
      updateComputerScoreboard();
      return;
    } else if (computerSelection == 'scissors') {
      updateMessage('You win! Rock crushes scissors!');
      playerWon++;
      updatePlayerScoreboard();
      updateComputerScoreboard();
      return;
    } else if (computerSelection == 'paper') {
      updateMessage('You lose! Paper covers rock!');
      computerWon++;
      updatePlayerScoreboard();
      updateComputerScoreboard();
      return;
    } else if (computerSelection == 'spock') {
      updateMessage('You lose! Spock vaporizes rock!');
      computerWon++;
      updatePlayerScoreboard();
      updateComputerScoreboard();
      return;
    } else {
      updateMessage('Oops! Something went wrong executing the playRound function!');
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

function game() {
  if (rounds === 0) {
    rounds++
    pickOpponent();
    updateMessage('Starting round ' + rounds + '. Your opponent is ' + opponent + '. Make your selection below');
    updatePlayerScoreboard('Player: ' + playerWon);
    updateComputerScoreboard(opponent + ': ' + computerWon);
  } else if (rounds < 5) {
    rounds++
    updateMessage('Starting round ' + rounds + '.');
  } else if (rounds == 5) {
    if (playerWon == computerWon) {
      updateMessage('Game over! You tied with ' + opponent + '.');
      reset();
    } else if (playerWon > computerWon) {
      updateMessage('Game over! You beat ' + opponent + '!');
      reset();
    } else if (playerWon < computerWon) {
      updateMessage('Game over! ' + opponent + ' beat you!');
      reset();
    } else {
      updateMessage('Oops! Something went wrong executing the game function!');
    }
  }
}

function pickOpponent() {
  let generatedNumber = Math.floor(Math.random()*10)
  if (generatedNumber < 1) {
    opponent = 'Leonard';
  } else if (generatedNumber < 2) {
    opponent = 'Sheldon';
  } else if (generatedNumber < 3) {
    opponent = 'Penny';
  } else if (generatedNumber < 4) {
    opponent = 'Howard';
  } else if (generatedNumber < 5) {
    opponent = 'Raj';
  } else if (generatedNumber < 6) {
    opponent = 'Stuart';
  } else if (generatedNumber < 7) {
    opponent = 'Leslie';
  } else if (generatedNumber < 8) {
    opponent = 'Amy';
  } else if (generatedNumber < 9) {
    opponent = 'Bernadette';
  } else if (generatedNumber < 10) {
    opponent = 'Emily'
  } else {
  }
}

function updateMessage(message) {
  let gameMessages = document.querySelector('#gameMessages');
  gameMessages.textContent = message;
}

function updatePlayerScoreboard() {
  let playerScoreboard = document.querySelector('#playerScoreboard');
  playerScoreboard.textContent = 'Player: ' + playerWon;
}

function updateComputerScoreboard() {
  let computerScoreboard = document.querySelector('#computerScoreboard');
  computerScoreboard.textContent = opponent + ': ' + computerWon;
}

function reset() {
  rounds = 0;
  playerWon = 0;
  computerWon = 0;
}

let rounds = 0;
let playerWon = 0;
let computerWon = 0;
let opponent = null;
let computerSelection = null;
let playerSelection = null;


// more variables and listeners can be added to this same document.addEventListener
document.addEventListener("DOMContentLoaded", function(event) { 
  let rockButton = document.querySelector('#rockButton');
  // for some reason each time you click the button it picks a new opponent?
  rockButton.addEventListener('click', function () {playRound('rock', computerPlay)});
});