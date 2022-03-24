console.log("Hello World!");

const keysWhite = ['A', 'S', 'D', 'F', 'G', 'H', 'J'];
for (let key of keysWhite) {
  document.addEventListener("keydown", function (event) {
    if (event.code === `Key${key}`) {
      console.log(`The '${key}' key is pressed.`);
      new Audio(`./assets/white/${key}.mp3`).play();
    }
  });
  document.addEventListener("keyup", function (event) {
    if (event.code === `Key${key}`) {
      console.log(`The '${key}' key is lifted.`);
    }
  });
}

const keysBlack = ['W', 'E', 'T', 'Y', 'U'];
for (let key of keysBlack) {
  document.addEventListener("keydown", function (event) {
    if (event.code === `Key${key}`) {
      console.log(`The '${key}' key is pressed.`);
      new Audio(`./assets/black/${key}.mp3`).play();
    }
  });
  document.addEventListener("keyup", function (event) {
    if (event.code === `Key${key}`) {
      console.log(`The '${key}' key is lifted.`);
    }
  });
}