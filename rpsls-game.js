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
      document.getElementById('message').innerHTML = 'It\'s a draw!';
      return;
    } else if (computerSelection == 'rock') {
      document.getElementById('message').innerHTML = 'You win! Paper covers rock!';
      playerWon++;
      return;
    } else if (computerSelection == 'spock') {
      document.getElementById('message').innerHTML = 'You win! Paper disproves Spock!';
      playerWon++;
      return;
    } else if (computerSelection == 'scissors') {
      document.getElementById('message').innerHTML  = 'You lose! Scissors cuts paper!';
      computerWon++;
      return;
    } else if (computerSelection == 'lizard') {
      document.getElementById('message').innerHTML = 'You lose! Lizard eats paper!';
      computerWon++;
      return;
    } else {
      return 'Oops! Something went wrong!';
    }
  } else if (playerSelection == 'rock') {
    if (computerSelection == 'rock') {
      document.getElementById('message').innerHTML = 'It\'s a draw!';
      return;
    } else if (computerSelection == 'lizard') {
      document.getElementById('message').innerHTML = 'You win! Rock crushes lizard!';
      playerWon++;
      return;
    } else if (computerSelection == 'scissors') {
      document.getElementById('message').innerHTML = 'You win! Rock crushes scissors!';
      playerWon++;
      return;
    } else if (computerSelection == 'paper') {
      document.getElementById('message').innerHTML = 'You lose! Paper covers rock!';
      computerWon++;
      return;
    } else if (computerSelection == 'spock') {
      document.getElementById('message').innerHTML = 'You lose! Spock vaporizes rock!';
      computerWon++;
      return;
    } else {
      return 'Oops! Something went wrong!';
    }
  } else if (playerSelection == 'scissors') {
    if (computerSelection == 'scissors') {
      document.getElementById('message').innerHTML = 'It\'s a draw!';
      return;
    } else if (computerSelection == 'paper') {
      document.getElementById('message').innerHTML = 'You win! Scissors cuts paper!';
      playerWon++;
      return;
    } else if (computerSelection == 'lizard') {
      document.getElementById('message').innerHTML = 'You win! Scissors decapitates lizard!';
      playerWon++;
      return;
    } else if (computerSelection == 'spock') {
      document.getElementById('message').innerHTML = 'You lose! Spock smashes scissors!';
      computerWon++;
      return;
    } else if (computerSelection == 'rock') {
      document.getElementById('message').innerHTML = 'You lose! Rock crushes scissors!';
      computerWon++;
      return;
    } else {
      return 'Oops! Something went wrong!';
    }
  } else if (playerSelection == 'lizard') {
    if (computerSelection == 'lizard') {
      document.getElementById('message').innerHTML = 'It\'s a draw!';
      return;
    } else if (computerSelection == 'spock') {
      document.getElementById('message').innerHTML = 'You win! Lizard poisons Spock!';
      playerWon++;
      return;
    } else if (computerSelection == 'paper') {
      document.getElementById('message').innerHTML = 'You win! Lizard eats paper!';
      playerWon++;
      return;
    } else if (computerSelection == 'rock') {
      document.getElementById('message').innerHTML = 'You lose! Rock crushes lizard!';
      computerWon++;
      return;
    } else if (computerSelection == 'scissors') {
      document.getElementById('message').innerHTML = 'You lose! Scissors decapitates lizard!';
      computerWon++;
      return;
    } else {
      return 'Oops! Something went wrong!';
    }
  } else if (playerSelection == 'spock') {
    if (computerSelection == 'spock') {
      document.getElementById('message').innerHTML = 'It\'s a draw!';
      return;
    } else if (computerSelection == 'scissors') {
      document.getElementById('message').innerHTML = 'You win! Spock smashes scissors!';
      playerWon++;
      return;
    } else if (computerSelection == 'rock') {
      document.getElementById('message').innerHTML = 'You win! Spock vaporizes rock!';
      playerWon++;
      return;
    } else if (computerSelection == 'lizard') {
      document.getElementById('message').innerHTML = 'You lose! Lizard poisons Spock';
      computerWon++;
      return;
    } else if (computerSelection == 'paper') {
      document.getElementById('message').innerHTML = 'You lose! Paper disproves Spock!';
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
    console.log('Starting round ' + rounds);
    playRound(playerSelection(), computerPlay());
    updateScore (playerWon, computerWon);
    game();
  } else if (rounds == 5) {
    console.log('Game over!');
    if (playerWon == computerWon) {
      console.log('It\'s a draw! Good game!');
      updateScore (playerWon, computerWon);
    } else if (playerWon > computerWon) {
      console.log('You win the game!');
      updateScore (playerWon, computerWon);
    } else if (playerWon < computerWon) {
      console.log('You lose the game!');
      updateScore (playerWon, computerWon);
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

function updateScore (playerWon, computerWon) {
  document.getElementById('playerPoints').innerHTML = playerWon;
  document.getElementById('computerPoints').innerHTML = computerWon;
}

let rounds = 0;
let playerWon = 0;
let computerWon = 0;