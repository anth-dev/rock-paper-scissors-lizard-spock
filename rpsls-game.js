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

function playRound(playerSelection, computerPlay) {
  computerPlay();
  if (playerSelection == 'paper') {
    if (computerSelection == 'paper') {
      updateMessage('It\'s a draw! Push button above to continue.');
      updatePlayerScoreboard();
      updateComputerScoreboard();
      toggleHidden();
      return;
    } else if (computerSelection == 'rock') {
      updateMessage('You win! Paper covers rock! Push button above to continue.');
      playerWon++;
      updatePlayerScoreboard();
      updateComputerScoreboard();
      toggleHidden();
      return;
    } else if (computerSelection == 'spock') {
      updateMessage('You win! Paper disproves Spock! Push button above to continue.');
      playerWon++;
      updatePlayerScoreboard();
      updateComputerScoreboard();
      toggleHidden();
      return;
    } else if (computerSelection == 'scissors') {
      updateMessage('You lose! Scissors cuts paper! Push button above to continue.');
      computerWon++;
      updatePlayerScoreboard();
      updateComputerScoreboard();
      toggleHidden();
      return;
    } else if (computerSelection == 'lizard') {
      updateMessage('You lose! Lizard eats paper! Push button above to continue.');
      computerWon++;
      updatePlayerScoreboard();
      updateComputerScoreboard();
      toggleHidden();
      return;
    } else {
      updateMessage('Oops! Something went wrong executing the playRound function!');
    }
  } else if (playerSelection == 'rock') {
    if (computerSelection == 'rock') {
      updateMessage('It\'s a draw! Push button above to continue.');
      updatePlayerScoreboard();
      updateComputerScoreboard();
      toggleHidden();
      return;
    } else if (computerSelection == 'lizard') {
      updateMessage('You win! Rock crushes lizard! Push button above to continue.');
      playerWon++;
      updatePlayerScoreboard();
      updateComputerScoreboard();
      toggleHidden();
      return;
    } else if (computerSelection == 'scissors') {
      updateMessage('You win! Rock crushes scissors! Push button above to continue.');
      playerWon++;
      updatePlayerScoreboard();
      updateComputerScoreboard();
      toggleHidden();
      return;
    } else if (computerSelection == 'paper') {
      updateMessage('You lose! Paper covers rock! Push button above to continue.');
      computerWon++;
      updatePlayerScoreboard();
      updateComputerScoreboard();
      toggleHidden();
      return;
    } else if (computerSelection == 'spock') {
      updateMessage('You lose! Spock vaporizes rock! Push button above to continue.');
      computerWon++;
      updatePlayerScoreboard();
      updateComputerScoreboard();
      toggleHidden();
      return;
    } else {
      updateMessage('Oops! Something went wrong executing the playRound function!');
      return;
    }
  } else if (playerSelection == 'scissors') {
    if (computerSelection == 'scissors') {
      updateMessage('It\'s a draw! Push button above to continue.');
      updatePlayerScoreboard();
      updateComputerScoreboard();
      toggleHidden();
      return;
    } else if (computerSelection == 'paper') {
      updateMessage('You win! Scissors cuts paper! Push button above to continue.');
      playerWon++;
      updatePlayerScoreboard();
      updateComputerScoreboard();
      toggleHidden();
      return;
    } else if (computerSelection == 'lizard') {
      updateMessage('You win! Scissors decapitates lizard! Push button above to continue.');
      playerWon++;
      updatePlayerScoreboard();
      updateComputerScoreboard();
      toggleHidden();
      return;
    } else if (computerSelection == 'spock') {
      updateMessage('You lose! Spock smashes scissors! Push button above to continue.');
      computerWon++;
      updatePlayerScoreboard();
      updateComputerScoreboard();
      toggleHidden();
      return;
    } else if (computerSelection == 'rock') {
      updateMessage('You lose! Rock crushes scissors! Push button above to continue.');
      computerWon++;
      updatePlayerScoreboard();
      updateComputerScoreboard();
      toggleHidden();
      return;
    } else {
      updateMessage('Oops! Something went wrong executing the playRound function!');
      return;
    }
  } else if (playerSelection == 'lizard') {
    if (computerSelection == 'lizard') {
      updateMessage('It\'s a draw! Push button above to continue.');
      updatePlayerScoreboard();
      updateComputerScoreboard();
      toggleHidden();
      return;
    } else if (computerSelection == 'spock') {
      updateMessage('You win! Lizard poisons Spock! Push button above to continue.');
      playerWon++;
      updatePlayerScoreboard();
      updateComputerScoreboard();
      toggleHidden();
      return;
    } else if (computerSelection == 'paper') {
      updateMessage('You win! Lizard eats paper! Push button above to continue.');
      playerWon++;
      updatePlayerScoreboard();
      updateComputerScoreboard();
      toggleHidden();
      return;
    } else if (computerSelection == 'rock') {
      updateMessage('You lose! Rock crushes lizard! Push button above to continue.');
      computerWon++;
      updatePlayerScoreboard();
      updateComputerScoreboard();
      toggleHidden();
      return;
    } else if (computerSelection == 'scissors') {
      updateMessage('You lose! Scissors decapitates lizard! Push button above to continue.');
      computerWon++;
      updatePlayerScoreboard();
      updateComputerScoreboard();
      toggleHidden();
      return;
    } else {
      updateMessage('Oops! Something went wrong executing the playRound function!');
      return;
    }
  } else if (playerSelection == 'spock') {
    if (computerSelection == 'spock') {
      updateMessage('It\'s a draw! Push button above to continue.');
      updatePlayerScoreboard();
      updateComputerScoreboard();
      toggleHidden();
      return;
    } else if (computerSelection == 'scissors') {
      updateMessage('You win! Spock smashes scissors! Push button above to continue.');
      playerWon++;
      updatePlayerScoreboard();
      updateComputerScoreboard();
      toggleHidden();
      return;
    } else if (computerSelection == 'rock') {
      updateMessage('You win! Spock vaporizes rock! Push button above to continue.');
      playerWon++;
      updatePlayerScoreboard();
      updateComputerScoreboard();
      toggleHidden();
      return;
    } else if (computerSelection == 'lizard') {
      updateMessage('You lose! Lizard poisons Spock! Push button above to continue.');
      computerWon++;
      updatePlayerScoreboard();
      updateComputerScoreboard();
      toggleHidden();
      return;
    } else if (computerSelection == 'paper') {
      updateMessage('You lose! Paper disproves Spock! Push button above to continue.');
      computerWon++;
      updatePlayerScoreboard();
      updateComputerScoreboard();
      toggleHidden();
      return;
    } else {
      updateMessage('Oops! Something went wrong executing the playRound function!');
      return;
    }
  }
}

function game() {
  if (rounds === 0) {
    rounds++
    pickOpponent();
    updateMessage('Starting round ' + rounds + '. Your opponent is ' + opponent + '. Make your selection below.');
    updatePlayerScoreboard('Player: ' + playerWon);
    updateComputerScoreboard(opponent + ': ' + computerWon);
    toggleHidden();
  } else if (rounds < 5) {
    rounds++
    updateMessage('Starting round ' + rounds + '. Make your selection below.');
    toggleHidden();
  } else if (rounds == 5) {
    if (playerWon == computerWon) {
      updateMessage('Game over! You tied with ' + opponent + '. Push button above to play again.');
      reset();
    } else if (playerWon > computerWon) {
      updateMessage('Game over! You beat ' + opponent + '! Push button above to play again.');
      reset();
    } else if (playerWon < computerWon) {
      updateMessage('Game over! ' + opponent + ' beat you! Push button above to play again.');
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

function toggleHidden() {
  var selectionButtonContainer = document.querySelector('#selectionButtonContainer');
  if (selectionButtonContainer.style.display === "none") {
    selectionButtonContainer.style.display = "flex";
  } else {
    selectionButtonContainer.style.display = "none";
  }
}

let rounds = 0;
let playerWon = 0;
let computerWon = 0;
let opponent = null;
let computerSelection = null;
let playerSelection = null;
// This initial toggle is needed to make it work properly
toggleHidden();

document.addEventListener("DOMContentLoaded", function(event) { 
  let startButton = document.querySelector('#startButton');
  startButton.addEventListener('click', function () {game()});
  let rockButton = document.querySelector('#rockButton');
  rockButton.addEventListener('click', function () {playRound('rock', computerPlay)});
  let paperButton = document.querySelector('#paperButton');
  paperButton.addEventListener('click', function () {playRound('paper', computerPlay)});
  let scissorsButton = document.querySelector('#scissorsButton');
  scissorsButton.addEventListener('click', function () {playRound('scissors', computerPlay)});
  let lizardButton = document.querySelector('#lizardButton');
  lizardButton.addEventListener('click', function () {playRound('lizard', computerPlay)});
  let spockButton = document.querySelector('#spockButton');
  spockButton.addEventListener('click', function () {playRound('spock', computerPlay)});
});