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
      alert('It\'s a draw! Good game!');
    } else if (playerWon > computerWon) {
      alert('You win the game!');
    } else if (playerWon < computerWon) {
      alert('You lose the game!');
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

function alertScore (playerWon, computerWon) {
  alert('Player Score: ' + playerWon + ' Computer Score: ' + computerWon);
}

let rounds = 0;
let playerWon = 0;
let computerWon = 0;