const canvas = document.getElementById("gameBoard");

const tempTextDisplay = document.getElementById("temp");

const tileSize = 12;
const grid = [];

for (let i = 0; i < canvas.height / 12; i++) {
  grid.push([]);
  for (let j = 0; j < canvas.width / 12; j++) {
    grid[i].push(0);
  }
}
