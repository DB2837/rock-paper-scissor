const possibleChoices = ["rock", "paper", "scissor"];
let playerChoice;
let computerChoice;
let playerCounter = 0;
let computerCounter = 0;

const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");

const weaponButtons = document.querySelectorAll(".card");

weaponButtons.forEach((button) =>
  button.addEventListener("click", () => {
    playerChoice = button.id;
    computerChoice = computerPlay();
    changePlayerImage(playerChoice);
    changeComputerImage(computerChoice);
    playRound();
  })
);

const resultDisplay = document.createElement("h3");
document.body.appendChild(resultDisplay);
resultDisplay.style.textAlign = "center";
resultDisplay.style.fontSize = "28px";

const playerChoiceImage = document.getElementById("player-choice");
const computerChoiceImage = document.getElementById("computer-choice");

generateRandomInteger = (max) => Math.floor(Math.random() * max); //generate random integer between 0-(max - 1)

computerPlay = () =>
  possibleChoices[generateRandomInteger(possibleChoices.length)];

function changePlayerImage(playerChoice) {
  if (playerChoice == "paper") {
    playerChoiceImage.src = "/images/rock-paper-scissors-icon-2.jpg";
  } else if (playerChoice == "rock") {
    playerChoiceImage.src = "/images/rock-paper-scissors-icon-3.jpg";
  } else if (playerChoice == "scissor") {
    playerChoiceImage.src = "/images/rock-paper-scissors-icon-4.jpg";
  }
}

function changeComputerImage(computerChoice) {
  if (computerChoice == "paper") {
    computerChoiceImage.src = "/images/rock-paper-scissors-icon-2.jpg";
  } else if (computerChoice == "rock") {
    computerChoiceImage.src = "/images/rock-paper-scissors-icon-3.jpg";
  } else if (computerChoice == "scissor") {
    computerChoiceImage.src = "/images/rock-paper-scissors-icon-4.jpg";
  }
}

function playRound() {
  if (playerChoice == computerChoice) {
    resultDisplay.textContent = `No one wins, it's a draw.`;
  } else if (playerChoice == "paper" && computerChoice == "rock") {
    playerCounter++;
    playerScore.textContent = playerCounter;
    resultDisplay.textContent = `You Won! ${playerChoice} beat ${computerChoice}`;
  } else if (playerChoice == "paper" && computerChoice == "scissor") {
    computerCounter++;
    computerScore.textContent = computerCounter;
    resultDisplay.textContent = `You Lose! ${computerChoice} beat ${playerChoice}`;
  } else if (playerChoice == "rock" && computerChoice == "scissor") {
    playerCounter++;
    playerScore.textContent = playerCounter;
    resultDisplay.textContent = `You Won! ${playerChoice} beat ${computerChoice}`;
  } else if (playerChoice == "rock" && computerChoice == "paper") {
    computerCounter++;
    computerScore.textContent = computerCounter;
    resultDisplay.textContent = `You Lose! ${computerChoice} beat ${playerChoice}`;
  } else if (playerChoice == "scissor" && computerChoice == "paper") {
    playerCounter++;
    playerScore.textContent = playerCounter;
    resultDisplay.textContent = `You Won! ${playerChoice} beat ${computerChoice}`;
  } else if (playerChoice == "scissor" && computerChoice == "rock") {
    computerCounter++;
    computerScore.textContent = computerCounter;
    resultDisplay.textContent = `You Lose! ${computerChoice} beat ${playerChoice}`;
  } else console.log("something went wrong!");
}

/* function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound());
  }
}

game(); */
