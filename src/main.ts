import gridAreas from "./gridAreas";
import levelConfig from "./levelConfig";
import blockDevTools from "./blockDevTools";
import { updateScoreboard, addScore } from "./databaseOperations";

blockDevTools();

let status = "start";
let level = 1;
let seconds = 0;
let tens = 0;
let Interval: number;

const maze = document.querySelector(".maze") as HTMLElement;
const walls = document.querySelectorAll(".maze__wall");
const modal = document.querySelector(".modal") as HTMLElement;
const audioPlayer = document.querySelector(
  ".maze__audioplayer"
) as HTMLAudioElement;
const startButton = document.querySelector(".maze__start") as HTMLElement;
const finishElement = document.querySelector(".maze__finish") as HTMLElement;
const wallWithText = document.querySelector(".maze__wall--2") as HTMLElement;
const modalTitle = document.querySelector(".modal__title") as HTMLElement;
const button = document.querySelector(".modal__button") as HTMLElement;
const appendTens = document.getElementById("tens") as HTMLElement;
const appendSeconds = document.getElementById("seconds") as HTMLElement;
const infoBtn = document.querySelector(".info-button") as HTMLElement;
const instructionModal = document.querySelector(
  ".instruction-modal"
) as HTMLElement;
const instructionCloseBtn = document.querySelector(
  ".instruction-modal__close-button"
) as HTMLElement;

const scoreboardOpenBtn = document.querySelector(
  ".modal__button--scoreboard"
) as HTMLElement;
const scoreBoardCloseBtn = document.querySelector(
  ".scoreboard-modal__close-button"
) as HTMLElement;
const scoreBoardModal = document.querySelector(
  ".scoreboard-modal"
) as HTMLElement;

updateMaze(1);
updateScoreboard();

button.addEventListener("click", () => {
  if (level === 1) {
    wallWithText.textContent = "Click the Dragon to start the game";
  } else {
    wallWithText.textContent = "";
  }

  if (
    button.textContent === "Play Again" ||
    button.textContent === "Yeyy, play again"
  ) {
    clearInterval(Interval);
    tens = 0;
    seconds = 0;
    if (appendTens) {
      appendTens.innerHTML = "00";
    }
    if (appendSeconds) {
      appendSeconds.innerHTML = "00";
    }
    level = 1;
  }

  modal.style.display = "none";
  updateMaze(level);
});

// wall collision
maze.addEventListener("mouseleave", handleGameReset);

walls.forEach((wall) => {
  wall.addEventListener("mouseover", handleGameReset);
});

// start button is clicked
startButton.addEventListener("click", () => {
  status = "go";
  startButton.textContent = "GO!";
  setTimeout(() => {
    startButton.textContent = "";
    wallWithText.textContent = "";
  }, 1000);
  clearInterval(Interval);
  Interval = setInterval(startTimer, 10);
});

// finish line
finishElement.addEventListener("mouseover", () => {
  if (status === "go") {
    status = "finished";

    audioPlayer.src = levelConfig[level].audioSource;
    audioPlayer.play();

    setModalContent(level);
    clearInterval(Interval);
    modal.style.display = "block";
  }
});

scoreboardOpenBtn.addEventListener("click", () => {
  scoreBoardModal.style.display = "block";
});

scoreBoardCloseBtn.addEventListener("click", () => {
  scoreBoardModal.style.display = "none";
});

infoBtn.addEventListener("click", () => {
  instructionModal.style.display = "block";
});

instructionCloseBtn.addEventListener("click", () => {
  instructionModal.style.display = "none";
});

// update maze (styles / images / grid / walls' color)
function updateMaze(level: number) {
  const config = levelConfig[level];
  document.body.style.backgroundImage = config.background;
  maze.style.backgroundColor = config.pathColor;
  maze.style.gridTemplateColumns = config.gridColsRows;
  maze.style.gridTemplateRows = config.gridColsRows;
  walls.forEach((wall) => {
    (wall as HTMLElement).style.backgroundColor = config.wallsColor;
  });
  startButton.style.gridArea = config.startArea;
  startButton.style.backgroundImage = config.startIcon;
  finishElement.style.gridArea = config.finishArea;
  finishElement.style.backgroundImage = config.finishIcon;

  updateWalls(level);
}

// update walls' grid

function updateWalls(level: number) {
  const currentLevelConfig = gridAreas[`level${level}`];
  walls.forEach((wall) => {
    (wall as HTMLElement).style.display = "none";
  });

  Object.keys(currentLevelConfig).forEach((wallClass) => {
    const wall = document.querySelector(`.maze__wall--${wallClass}`);
    if (wall) {
      (wall as HTMLElement).style.display = "block";
      (wall as HTMLElement).style.gridArea = currentLevelConfig[wallClass];
    }
  });
}

function handleGameReset() {
  if (status !== "go") {
    return;
  }

  walls.forEach((wall) => {
    (wall as HTMLElement).style.backgroundColor = "#bf0000";
  });

  setTimeout(() => {
    status = "start";
    maze.classList.remove("dead");
    level = 1;
  }, 500);

  modal.style.display = "block";
  modalTitle.textContent = "Shrek's Maze";
  button.textContent = "Play Again";
  level = 1;
  clearInterval(Interval);
}

function setModalContent(currentLevel: number) {
  if (currentLevel < 3) {
    modalTitle.textContent = "Good Job";
    button.textContent = "Next Level";
    level++;
  } else {
    modalTitle.textContent = "You won";
    button.textContent = "Yeyy, play again";

    let userName = prompt(
      "Congratulations! Enter your name (max 13 characters):"
    );
    if (userName) {
      userName = userName.substring(0, 13);
      const time = `${appendSeconds.innerHTML}:${appendTens.innerHTML}`;
      addScore(userName, time);
      updateScoreboard();
    }
  }
}

function startTimer() {
  tens++;

  if (tens <= 9) {
    appendTens.innerHTML = "0" + tens.toString();
  }

  if (tens > 9) {
    appendTens.innerHTML = tens.toString();
  }

  if (tens > 99) {
    seconds++;
    appendSeconds.innerHTML = "0" + seconds.toString();
    tens = 0;
    appendTens.innerHTML = "00";
  }

  if (seconds > 9) {
    appendSeconds.innerHTML = seconds.toString();
  }
}
