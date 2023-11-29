interface LevelGridAreas {
  [key: string]: string;
}

interface GridAreas {
  [key: `level${number}`]: LevelGridAreas;
}

export default GridAreas;
