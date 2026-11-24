noise.seed(Math.random());

const tileSize = 12;
const chunkSize = 16;

const grid = [];
const chunkGrid = [];

const worldWidth = 100;
const worldHeight = 100;

const horizon = 10;
const amplitude = 15;

for (let y = 0; y < worldHeight; y++) {
  grid.push([]);
  for (let x = 0; x < worldWidth; x++) {
    const noiseValue = noise.perlin2(x / 20, 0);
    const height = horizon + noiseValue * amplitude;
    if (y >= height) {
      grid[y].push(0);
    } else {
      grid[y].push(1);
    }
  }
}

const grass = new Image();
grass.src = "assets/grass.png";
const dirt = new Image();
dirt.src = "assets/dirt.png";

function generateTerrain() {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == 0) {
        ctx.drawImage(
          grass,
          j * tileSize - cameraX / zoom,
          i * tileSize - cameraY / zoom,
          tileSize,
          tileSize,
        );
      }
    }
  }
}
