const possibleChoices = ["rock", "paper", "scissor"];

generateRandomInteger = (max) => Math.floor(Math.random() * max); //generate random integer between 0-2
computerPlay = () => possibleChoices[generateRandomInteger(3)];
playerSelection = () => prompt("Make your choice(Rock, Paper, Scissor): ", " "); //ask player to type one of the possible choices
validatePlayerChoice = (string) => string.toLowerCase(); // makes the choice lower case to match option in possibleCoice array

function playRound() {
  const playerChoice = validatePlayerChoice(playerSelection());
  const computerChoice = computerPlay();

  if (playerChoice == computerChoice) {
    return "no one wins, tie";
  } else if (playerChoice == "paper" && computerChoice == "rock") {
    return `You Won! ${playerChoice} beat ${computerChoice}`;
  } else if (playerChoice == "paper" && computerChoice == "scissor") {
    return `You Lose! ${computerChoice} beat ${playerChoice}`;
  } else if (playerChoice == "rock" && computerChoice == "scissor") {
    return `You Won! ${playerChoice} beat ${computerChoice}`;
  } else if (playerChoice == "rock" && computerChoice == "paper") {
    return `You Lose! ${computerChoice} beat ${playerChoice}`;
  } else if (playerChoice == "scissor" && computerChoice == "paper") {
    return `You Won! ${playerChoice} beat ${computerChoice}`;
  } else if (playerChoice == "scissor" && computerChoice == "rock") {
    return `You Lose! ${computerChoice} beat ${playerChoice}`;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound());
  }
}

game();
