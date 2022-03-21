const possibleChoices = ["rock", "paper", "scissor"];

const paperButton = document.querySelector("#paper");
const rockButton = document.querySelector("#rock");
const scissorButton = document.querySelector("#scissor");

const myScore = document.querySelector("#my-score");

generateRandomInteger = (max) => Math.floor(Math.random() * max); //generate random integer between 0-(max - 1)

computerPlay = () =>
  possibleChoices[generateRandomInteger(possibleChoices.length)];

let playerCounter = 0;
let computerCounter = 0;

function playRound() {
  const computerChoice = computerPlay();

  if (this.id == computerChoice) {
    console.log("no one wins, tie");
  } else if (this.id == "paper" && computerChoice == "rock") {
    playerCounter++;
    document.getElementById("player-score").innerHTML = playerCounter;
    console.log(`You Won! ${this.id} beat ${computerChoice}`);
  } else if (this.id == "paper" && computerChoice == "scissor") {
    computerCounter++;
    document.getElementById("computer-score").innerHTML = computerCounter;
    console.log(`You Lose! ${computerChoice} beat ${this.id}`);
  } else if (this.id == "rock" && computerChoice == "scissor") {
    playerCounter++;
    document.getElementById("player-score").innerHTML = playerCounter;
    console.log(`You Won! ${this.id} beat ${computerChoice}`);
  } else if (this.id == "rock" && computerChoice == "paper") {
    computerCounter++;
    document.getElementById("computer-score").innerHTML = computerCounter;
    console.log(`You Lose! ${computerChoice} beat ${this.id}`);
  } else if (this.id == "scissor" && computerChoice == "paper") {
    playerCounter++;
    document.getElementById("player-score").innerHTML = playerCounter;
    console.log(`You Won! ${this.id} beat ${computerChoice}`);
  } else if (this.id == "scissor" && computerChoice == "rock") {
    computerCounter++;
    document.getElementById("computer-score").innerHTML = computerCounter;
    console.log(`You Lose! ${computerChoice} beat ${this.id}`);
  } else console.log("something went wrong!");
}

paperButton.addEventListener("click", playRound);
rockButton.addEventListener("click", playRound);
scissorButton.addEventListener("click", playRound);

/* function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound());
  }
}

game(); */
