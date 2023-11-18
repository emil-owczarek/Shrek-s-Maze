// firebase

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import {
  getFirestore,
  doc,
  setDoc,
  collection,
  query,
  orderBy,
  limit,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDMMr4pNlvym9tNaDzMeLGkc_6z3cXQ4RI",
  authDomain: "shrek-s-maze-59835.firebaseapp.com",
  projectId: "shrek-s-maze-59835",
  storageBucket: "shrek-s-maze-59835.appspot.com",
  messagingSenderId: "830984947424",
  appId: "1:830984947424:web:b268b898f6b9e8c6503285",
  measurementId: "G-GQMS0WZT37",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// game-config

let status = "start";
let level = 1;
let seconds = 0;
let tens = 0;
let Interval;

const maze = document.querySelector(".maze");
const walls = document.querySelectorAll(".maze__wall");
const modal = document.querySelector(".modal");
const audioPlayer = document.querySelector(".maze__audioplayer");
const startButton = document.querySelector(".maze__start");
const finishElement = document.querySelector(".maze__finish");
const wallWithText = document.querySelector(".maze__wall--2");
const modalTitle = document.querySelector(".modal__title");
const button = document.querySelector(".modal__button");
const appendTens = document.getElementById("tens");
const appendSeconds = document.getElementById("seconds");

const scoreboardOpenBtn = document.querySelector(".modal__button--scoreboard");
const scoreBoardCloseBtn = document.querySelector(
  ".scoreboard-modal__close-button"
);
const scoreBoardModal = document.querySelector(".scoreboard-modal");

const gridAreas = {
  level1: {
    1: "1 / 1 / 7 / 3",
    2: "4 / 3 / 7 / 5",
    3: "2 / 6 / 8 / 8",
    4: "2 / 4 / 3 / 6",
  },
  level2: {
    2: "1 / 5 / 6 / 8",
    1: "1 / 8 / 4 / 9",
    3: "3 / 9 / 4 / 10",
    4: "5 / 9 / 11 / 11",
    5: "6 / 7 / 10 / 8",
    6: "2 / 3 / 11 / 4",
    7: "7 / 4 / 8 / 6",
    8: "1 / 1 / 5 / 2",
    9: "6 / 2 / 9 / 3",
    10: "9 / 5 / 10 / 7",
  },
  level3: {
    1: "18 / 4 / 19 / 7",
    2: "13 / 1 / 18 / 7",
    3: "1 / 1 / 13 / 3",
    4: "20 / 4 / 21 / 9",
    5: "1 / 3 / 3 / 18",
    6: "10 / 8 / 20 / 9",
    7: "10 / 4 / 12 / 8",
    8: "4 / 4 / 10 / 5",
    9: "4 / 5 / 5 / 16",
    10: "15 / 9 / 18 / 13",
    11: "14 / 10 / 15 / 13",
    12: "6 / 6 / 7 / 17",
    13: "8 / 6 / 9 / 17",
    14: "3 / 17 / 19 / 18",
    15: "10 / 10 / 13 / 16",
    16: "19 / 10 / 20 / 19",
    17: "14 / 14 / 18 / 17",
    18: "6 / 20 / 21 / 21",
    19: "9 / 18 / 18 / 19",
    20: "4 / 19 / 6 / 21",
  },
};

const levelConfig = {
  1: {
    gridColsRows: "repeat(7, 1fr)",
    background: "url('../src/assets/images/castle.webp')",
    pathColor: "#723305",
    wallsColor: "rgba(80, 5, 5, 0.822)",
    startArea: "7 / 1 / 8 / 2",
    finishArea: "1 / 7 / 2 / 8",
    startIcon: "url('../src/assets/images/dragon.webp')",
    finishIcon: "url('../src/assets/images/donkey.webp')",
    audioSource: "../src/assets/sounds/level1.mp3",
  },
  2: {
    gridColsRows: "repeat(10, 1fr)",
    background: "url('../src/assets/images/swamp.webp')",
    pathColor: "#aa5e27",
    wallsColor: "rgb(13, 83, 4)",
    startArea: "9 / 1 / 11 / 3",
    finishArea: "1 / 9 / 3 / 11",
    startIcon: "url('../src/assets/images/donkey.webp')",
    finishIcon: "url('../src/assets/images/shrek.webp')",
    audioSource: "../src/assets/sounds/level2.mp3",
  },
  3: {
    gridColsRows: "repeat(20, 1fr)",
    background: "url('../src/assets/images/far-far-away.webp')",
    wallsColor: "#2d303d",
    startArea: "18 / 1 / 21 / 4",
    finishArea: "1 / 18 / 4 / 21",
    startIcon: "url('../src/assets/images/shrek.webp')",
    finishIcon: "url('../src/assets/images/fiona.webp')",
    audioSource: "../src/assets/sounds/level3.mp3",
  },
};

// events -------------------------------------------------------------------------

// at the beginning
updateMaze(1);
updateScoreboard();

// when main modal button is clicked
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
    appendTens.innerHTML = "00";
    appendSeconds.innerHTML = "00";
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

// when start button (with the picture) is clicked
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

// when you reach finish line
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

// scoreboard modal opening and closing
scoreboardOpenBtn.addEventListener("click", () => {
  scoreBoardModal.style.display = "block";
});

scoreBoardCloseBtn.addEventListener("click", () => {
  scoreBoardModal.style.display = "none";
});

// prevent using dev tools
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "F12") {
    e.preventDefault();
    alert("Use of developer tools is blocked on this page.");
  }
});

// document.addEventListener("keydown", function (e) {
//   if (
//     e.key === "F12" ||
//     (e.ctrlKey &&
//       e.shiftKey &&
//       (e.key === "I" || e.key === "C" || e.key === "J"))
//   ) {
//     e.preventDefault();
//     alert("Use of developer tools is blocked on this page.");
//   }
// });

// fucntions --------------------------------------------------------------------

// update maze (styles / images / grid / walls' color)
function updateMaze(level) {
  const config = levelConfig[level];
  document.body.style.backgroundImage = config.background;
  maze.style.backgroundColor = config.pathColor;
  maze.style.gridTemplateColumns = config.gridColsRows;
  maze.style.gridTemplateRows = config.gridColsRows;
  walls.forEach((wall) => {
    wall.style.backgroundColor = config.wallsColor;
  });
  startButton.style.gridArea = config.startArea;
  startButton.style.backgroundImage = config.startIcon;
  finishElement.style.gridArea = config.finishArea;
  finishElement.style.backgroundImage = config.finishIcon;

  updateWalls(level);
}

// update walls' grid

function updateWalls(level) {
  const currentLevelConfig = gridAreas[`level${level}`];
  walls.forEach((wall) => {
    wall.style.display = "none";
  });

  Object.keys(currentLevelConfig).forEach((wallClass) => {
    const wall = document.querySelector(`.maze__wall--${wallClass}`);
    if (wall) {
      wall.style.display = "block";
      wall.style.gridArea = currentLevelConfig[wallClass];
    }
  });
}

// handle collision

function handleGameReset() {
  if (status !== "go") {
    return;
  }

  walls.forEach((wall) => {
    wall.style.backgroundColor = "#bf0000";
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

// set mdoal content

function setModalContent(currentLevel) {
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

// add score to database

function addScore(userName, time) {
  const scoreRef = doc(collection(db, "scores"));
  setDoc(scoreRef, {
    name: userName,
    time: time,
  })
    .then(() => {})
    .catch((error) => {
      console.error("Error adding score: ", error);
    });
}

// get scores from database and display on scoreboard

function updateScoreboard() {
  const scoreRef = query(
    collection(db, "scores"),
    orderBy("time", "asc"),
    limit(5)
  );

  getDocs(scoreRef).then((querySnapshot) => {
    const scoreboardDiv = document.querySelector(
      ".scoreboard-modal__content div"
    );
    scoreboardDiv.innerHTML = "";

    for (let i = 0; i < querySnapshot.docs.length; i++) {
      const doc = querySnapshot.docs[i];
      const score = doc.data();
      const scoreParagraph = document.createElement("p");
      scoreParagraph.className = "scoreboard-modal__player-score";
      scoreParagraph.textContent = `${i + 1}. ${score.name} - ${score.time}`;
      scoreboardDiv.appendChild(scoreParagraph);
    }
  });
}

// timer handling

function startTimer() {
  tens++;

  if (tens <= 9) {
    appendTens.innerHTML = "0" + tens;
  }

  if (tens > 9) {
    appendTens.innerHTML = tens;
  }

  if (tens > 99) {
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    tens = 0;
    appendTens.innerHTML = "0" + 0;
  }

  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }
}
