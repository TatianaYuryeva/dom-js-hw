function createGame() {
  const goblin = document.createElement("img");
  const image = require("../img/goblin.png")
  goblin.setAttribute("src", image)

  const getHole = (index) => document.querySelector(`#hole${index}`);

  const activateHole = (index) => getHole(index).append(goblin);

  const holeInterval = setInterval(() => {
    const activeHoleIndex = Math.floor(1 + Math.random() * 16);
    //if (activeHoleIndex === )
    activateHole(activeHoleIndex);
  }, 1000);
}

document.addEventListener("DOMContentLoaded", createGame)

export default function demo(value) {
  return `Demo: ${value}`;
}
