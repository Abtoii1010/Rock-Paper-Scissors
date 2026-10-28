const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
let Playerresult = document.getElementById("Playerresult");
let Computerresult = document.getElementById("Computerresult");
let player = 0;
let computer = 0;

function playGame(playerChoice) {
  const Computerchoice = choices[Math.floor(Math.random() * 3)];
  result.classList.add("green");

  Playerresult.classList.add("black");
  Computerresult.classList.add("black");

  playerDisplay.textContent = `Player : ${playerChoice}`;

  computerDisplay.textContent = `Computer : ${Computerchoice}`;

  if (playerChoice === Computerchoice) {
    result.textContent = "IT'S A TIE";
  } else {
    switch (playerChoice) {
      case "rock":
        if (Computerchoice === "paper") {
          result.textContent = "YOU LOSE";
        } else {
          result.textContent = "YOU WIN";
        }
        break;

      case "paper":
        if (Computerchoice === "scissors") {
          result.textContent = "YOU LOSE";
        } else {
          result.textContent = "YOU WIN";
        }
        break;

      case "scissors":
        if (Computerchoice === "rock") {
          result.textContent = "YOU LOSE";
        } else {
          result.textContent = "YOU WIN";
        }
        break;
    }
  }

  if (result.textContent === "YOU WIN") {
    player += 1;
  } else if (result.textContent === "YOU LOSE") {
    computer += 1;
  }

  Playerresult.textContent = `Player : ${player}`;
  Computerresult.textContent = `Computer : ${computer}`;
}
