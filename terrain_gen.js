noise.seed(Math.random());

const tempConsole = document.getElementById("test");

const canvas = document.getElementById("gameBoard");
const ctx = canvas.getContext("2d");

const tileSize = 12;
const grid = [];

const worldWidth = 200;
const worldHeight = 100;

for (let cHeight = 0; cHeight < worldHeight; cHeight++) {
  grid.push([]);
  for (let cWidth = 0; cWidth < worldWidth; cWidth++) {
    const height = noise.perlin2(cWidth / 10, 0);
    if (cHeight >= (height * worldHeight) / 3) {
      grid[cHeight].push(0);
    } else {
      grid[cHeight].push(1);
    }
  }
}

const img = new Image();
img.src = "grass.png";

img.addEventListener("load", () => {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == 0) {
        ctx.drawImage(img, j * tileSize, i * tileSize, tileSize, tileSize);
      }
    }
  }
});
