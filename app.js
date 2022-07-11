"use strict";
let playerScore = 0;
let computerScore = 0;
let round = 0;

const computerPlay = function () {
  const rps = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * rps.length);
  const choice = rps[index];
  return choice;
};

const playRound = function (playerSelection, computerSelection) {
  if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      playerScore++;
      return `You win, as rock beats scissors`;
    } else if (computerSelection === "paper") {
      computerScore++;
      return `You lose, as paper beats rocks`;
    } else {
      return `tie!`;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      playerScore++;
      return `You win, as rock beats paper`;
    } else if (computerSelection === "scissors") {
      computerScore++;
      return `You lose, as scissors beat paper`;
    } else {
      return `tie!`;
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      playerScore++;
      return `You win, as scissors beat paper`;
    } else if (computerSelection === "rock") {
      computerScore++;
      return `You lose, as rock beats scissors`;
    } else {
      return `tie!`;
    }
  }
};

const game = function () {
  for (let i = 0; i < 5; i++) {
    round++;
    console.log(`Round: ${round}`);
    let playerSelection = prompt("Please type in rock, paper or scissors");
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    console.log("Player score: " + playerScore);
    console.log("Computer score: " + computerScore);
  }
};

game();
