// Set up game parameters
const numPlayers = 5;
const numChairs = 3;

// Initialize game state
let players = [];
for (let i = 0; i < numPlayers; i++) {
  players.push(`Player ${i+1}`);
}
let chairs = [];
for (let i = 0; i < numChairs; i++) {
  chairs.push(`Chair ${i+1}`);
}
let currentPlayerIndex = Math.floor(Math.random() * numPlayers);
let currentChairIndex = 0;

// Define function to move to next player
function nextPlayer() {
  currentPlayerIndex = (currentPlayerIndex + 1) % numPlayers;
}

// Define function to move to next chair
function nextChair() {
  currentChairIndex = (currentChairIndex + 1) % chairs.length;
}

// Define function to remove chair
function removeChair() {
  chairs.splice(currentChairIndex, 1);
  currentChairIndex = currentChairIndex % chairs.length;
}

// Play game
while (players.length > 1) {
  // Play music and wait for input
  console.log("Music is playing...");
  prompt("Press enter to stop the music.");
  
  // Remove player who is closest to chair without sitting
  const closestPlayerIndex = (currentPlayerIndex - currentChairIndex + numPlayers) % numPlayers;
  console.log(`${players[closestPlayerIndex]} is out!`);
  players.splice(closestPlayerIndex, 1);
  
  // Remove chair and move to next chair and player
  removeChair();
  nextPlayer();
  nextChair();
}

// Display winner
console.log(`The winner is ${players[0]}!`);
