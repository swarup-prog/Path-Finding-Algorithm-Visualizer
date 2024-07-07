import { Maze, Cell } from "../types";

export const getNeighbours = (maze: Maze, cell: Cell) => {
  const [i, j] = cell;
  const rows = [i, i - 1, i + 1];
  const cols = [j, j - 1, j + 1];

  let neighbours: Cell[] = [];

  for (let col of cols) {
    for (let row of rows) {
      if (row >= 0 && col >= 0 && row < maze.length && row !== col) {
        if (row !== i || col !== j) {
          if (maze[row][col] === 0) continue;
          neighbours.push([row, col]);
        }
      }
    }
  }

  return neighbours;
};

export const isWall = (maze: Maze, cell: Cell): boolean => {
  const [i, j] = cell;
  return maze[i][j] === 0;
};

export const isVisited = (cell: Cell, visited: Cell[]): boolean => {
  return visited.some((v) => v[0] === cell[0] && v[1] === cell[1]);
};
