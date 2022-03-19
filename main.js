const possibleChoices = ["rock", "paper", "scissor"];

generateRandomInteger = (max) => Math.floor(Math.random() * max); //generate random integer between 0-2
computerPlay = () => possibleChoices[generateRandomInteger(3)];
