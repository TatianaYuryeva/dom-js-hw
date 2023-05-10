function createGame() {
  const goblin = document.createElement("img");
  const image = require("../img/goblin.png");
  goblin.setAttribute("src", image);

  const getHole = (index) => document.querySelector(`#hole${index}`);

  const activateHole = (index) => getHole(index).append(goblin);

  const holeInterval = setInterval(() => {
    const hole = goblin.parentElement
    let activeHoleIndex = Math.floor(1 + Math.random() * 16);

    while(hole !== null && hole.getAttribute("id").slice(4) == activeHoleIndex) {
      activeHoleIndex = Math.floor(1 + Math.random() * 16);
    }

    activateHole(activeHoleIndex);
  }, 1000);
}

document.addEventListener("DOMContentLoaded", createGame);

export default function demo(value) {
  return `Demo: ${value}`;
}
