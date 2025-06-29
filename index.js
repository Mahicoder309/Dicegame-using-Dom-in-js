// Select elements
const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const heading = document.querySelector("h1");

// Generate random numbers (1-6)
const player1Roll = Math.floor(Math.random() * 6) + 1;
const player2Roll = Math.floor(Math.random() * 6) + 1;

// Update dice images
dice1.src = `dice${player1Roll}.png`;
dice2.src = `dice${player2Roll}.png`;

// Determine the winner
if (player1Roll > player2Roll) {
  heading.textContent = "🚩 Player 1 Wins!";
} else if (player2Roll > player1Roll) {
  heading.textContent = "Player 2 Wins! 🚩";
} else {
  heading.textContent = "Game is Draw !";
}