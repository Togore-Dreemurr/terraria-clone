let cameraX = 0;
let cameraY = 0;

let zoom = 1.0;

function controlCamera() {
  if (keys.KeyW) {
    cameraY -= 10;
  }
  if (keys.KeyA) {
    cameraX -= 10;
  }
  if (keys.KeyS) {
    cameraY += 10;
  }
  if (keys.KeyD) {
    cameraX += 10;
  }
}
