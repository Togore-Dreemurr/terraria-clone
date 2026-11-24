const keys = {
  KeyW: false,
  KeyA: false,
  KeyS: false,
  KeyD: false,
};

document.addEventListener("keydown", (e) => {
  if (keys.hasOwnProperty(e.code)) {
    keys[e.code] = true;
  }
});

document.addEventListener("keyup", (e) => {
  if (keys.hasOwnProperty(e.code)) {
    keys[e.code] = false;
  }
});
