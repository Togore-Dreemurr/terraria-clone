const canvas = document.getElementById("gameBoard");
const ctx = canvas.getContext("2d");

const maxFPS = 30;
const frameIntervalMS = 1000 / maxFPS;
let previosTimeMS = 0;

function updatePhysics() {
  movePlayer();
  controlCamera();
}

function update() {
  requestAnimationFrame((currentTimeMS) => {
    const deltaTimeMS = currentTimeMS - previosTimeMS;

    if (deltaTimeMS >= frameIntervalMS) {
      previosTimeMS = currentTimeMS - (deltaTimeMS % frameIntervalMS);
      draw();
      updatePhysics();
    }

    update();
  });
}

grass.addEventListener("load", () => {
  requestAnimationFrame(update);
});

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.save();
  ctx.scale(zoom, zoom);

  generateTerrain();
  ctx.drawImage(player, 0, 0, 12, 12);

  ctx.restore();
}
