const possibleChoices = ["rock", "paper", "scissor"];
let playerChoice;
let computerChoice;

generateRandomInteger = (max) => Math.floor(Math.random() * max); //generate random integer between 0-2
computerPlay = () => possibleChoices[generateRandomInteger(3)];
playerSelection = () => prompt("Make your choice(Rock, Paper, Scissor): ", " "); //ask player to type one of the possible choices
validatePlayerChoice = (string) => string.toLowerCase(); // makes the choice lower case to match option in possibleCoice array

/* playRound = (computerPlay(), playerSelection()) => ; */
computerChoice = computerPlay();

playerChoice = validatePlayerChoice(playerSelection());
