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

    if (playerCounter >= 5 || computerCounter >= 5) {
      removeColor();
      resetGame();
    }
  })
);

const resultDisplay = document.createElement("h3");
document.body.appendChild(resultDisplay);
resultDisplay.style.textAlign = "center";
resultDisplay.style.fontSize = "28px";

const playerChoiceImage = document.getElementById("player-choice");
const computerChoiceImage = document.getElementById("computer-choice");

const playerCard = document.querySelector(".player-card");
const computerCard = document.querySelector(".computer-card");

generateRandomInteger = (max) => Math.floor(Math.random() * max); //generate random integer between 0-(max - 1)

computerPlay = () =>
  possibleChoices[generateRandomInteger(possibleChoices.length)];

function changePlayerImage(playerChoice) {
  if (playerChoice == "paper") {
    playerChoiceImage.src = "images/rock-paper-scissors-icon-2.JPG";
  } else if (playerChoice == "rock") {
    playerChoiceImage.src = "images/rock-paper-scissors-icon-3.JPG";
  } else if (playerChoice == "scissor") {
    playerChoiceImage.src = "images/rock-paper-scissors-icon-4.JPG";
  }
}

function changeComputerImage(computerChoice) {
  if (computerChoice == "paper") {
    computerChoiceImage.src = "images/rock-paper-scissors-icon-2.JPG";
  } else if (computerChoice == "rock") {
    computerChoiceImage.src = "images/rock-paper-scissors-icon-3.JPG";
  } else if (computerChoice == "scissor") {
    computerChoiceImage.src = "images/rock-paper-scissors-icon-4.JPG";
  }
}

function handleColorPlayerWin() {
  playerCard.classList.add("card-winner");
  playerCard.classList.remove("card-loser");
  computerCard.classList.remove("card-winner");
  computerCard.classList.add("card-loser");
}

function handleColorPlayerLose() {
  playerCard.classList.remove("card-winner");
  playerCard.classList.add("card-loser");
  computerCard.classList.remove("card-loser");
  computerCard.classList.add("card-winner");
}

function removeColor() {
  playerCard.classList.remove("card-winner");
  playerCard.classList.remove("card-loser");
  computerCard.classList.remove("card-winner");
  computerCard.classList.remove("card-loser");
}

function playRound() {
  if (playerChoice == computerChoice) {
    removeColor();
    resultDisplay.textContent = `No one wins, it's a draw.`;
  } else if (playerChoice == "paper" && computerChoice == "rock") {
    playerCounter++;
    handleColorPlayerWin();
    playerScore.textContent = playerCounter;
    resultDisplay.textContent = `You Won! ${playerChoice} beat ${computerChoice}`;
  } else if (playerChoice == "paper" && computerChoice == "scissor") {
    computerCounter++;
    handleColorPlayerLose();
    computerScore.textContent = computerCounter;
    resultDisplay.textContent = `You Lose! ${computerChoice} beat ${playerChoice}`;
  } else if (playerChoice == "rock" && computerChoice == "scissor") {
    playerCounter++;
    handleColorPlayerWin();
    playerScore.textContent = playerCounter;
    resultDisplay.textContent = `You Won! ${playerChoice} beat ${computerChoice}`;
  } else if (playerChoice == "rock" && computerChoice == "paper") {
    computerCounter++;
    handleColorPlayerLose();
    computerScore.textContent = computerCounter;
    resultDisplay.textContent = `You Lose! ${computerChoice} beat ${playerChoice}`;
  } else if (playerChoice == "scissor" && computerChoice == "paper") {
    playerCounter++;
    handleColorPlayerWin();
    playerScore.textContent = playerCounter;
    resultDisplay.textContent = `You Won! ${playerChoice} beat ${computerChoice}`;
  } else if (playerChoice == "scissor" && computerChoice == "rock") {
    computerCounter++;
    handleColorPlayerLose();
    computerScore.textContent = computerCounter;
    resultDisplay.textContent = `You Lose! ${computerChoice} beat ${playerChoice}`;
  } else console.log("something went wrong!");
}

function resetGame() {
  if (playerCounter > computerCounter) {
    resultDisplay.textContent = `You Won the Game \n ${playerCounter} - ${computerCounter} !`;
  } else {
    resultDisplay.textContent = `You Lost the Game \n ${computerCounter} - ${playerCounter} !`;
  }

  playerCounter = 0;
  computerCounter = 0;

  playerScore.textContent = playerCounter;
  computerScore.textContent = computerCounter;
}
