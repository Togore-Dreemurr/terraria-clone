const player = new Image();
player.src = "assets/player.png";

let playerX = 0;
let playerY = 0;

function movePlayer() {
  if (keys.KeyW) {
    playerY -= 10;
  }
  if (keys.KeyA) {
    playerX -= 10;
  }
  if (keys.KeyS) {
    playerY += 10;
  }
  if (keys.KeyD) {
    playerX += 10;
  }
}
