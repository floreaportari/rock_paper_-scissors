const array = ["rock", "paper", "scissors"];

function computerPlay(arr) {
  const randomChoice = Math.floor(Math.random() * arr.length);
  const item = arr[randomChoice].toLowerCase();
  return item;
}

// computerPlay(array);
