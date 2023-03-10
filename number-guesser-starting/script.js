let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
  return Math.floor(Math.random() * 10);
}
console.log(generateTarget());
function compareGuesses(user, computer, target) {
  let userDiff = Math.abs(target - user);
  let compDiff = Math.abs(target - computer);
  if (userDiff > compDiff) {
    return false;
  } else {
    return true;
  }
}

function updateScore(winner) {
  if (winner === "human") {
    humanScore += 1;
  } else {
    computerScore += 1;
  }
}

function advanceRound() {
  currentRoundNumber += 1;
}
