import LevelConfig from "./types/levelConfigTypes";

const levelConfig: { [level: number]: LevelConfig } = {
  1: {
    gridColsRows: "repeat(7, 1fr)",
    background: "url('./assets/images/castle.webp')",
    pathColor: "#723305",
    wallsColor: "rgba(80, 5, 5, 0.822)",
    startArea: "7 / 1 / 8 / 2",
    finishArea: "1 / 7 / 2 / 8",
    startIcon: "url('./assets/images/dragon.webp')",
    finishIcon: "url('./assets/images/donkey.webp')",
    audioSource: "./assets/sounds/level1.mp3",
  },
  2: {
    gridColsRows: "repeat(10, 1fr)",
    background: "url('./assets/images/swamp.webp')",
    pathColor: "#aa5e27",
    wallsColor: "rgb(13, 83, 4)",
    startArea: "9 / 1 / 11 / 3",
    finishArea: "1 / 9 / 3 / 11",
    startIcon: "url('./assets/images/donkey.webp')",
    finishIcon: "url('./assets/images/shrek.webp')",
    audioSource: "./assets/sounds/level2.mp3",
  },
  3: {
    gridColsRows: "repeat(20, 1fr)",
    background: "url('./assets/images/far-far-away.webp')",
    pathColor: "#aa5e27",
    wallsColor: "#2d303d",
    startArea: "18 / 1 / 21 / 4",
    finishArea: "1 / 18 / 4 / 21",
    startIcon: "url('./assets/images/shrek.webp')",
    finishIcon: "url('./assets/images/fiona.webp')",
    audioSource: "./assets/sounds/level3.mp3",
  },
};

export default levelConfig;
