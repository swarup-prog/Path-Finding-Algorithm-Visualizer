import { Maze, Cell } from "../types";

export const getNeighbours = (maze: Maze, cell: Cell) => {
  const [i, j] = cell;
  const potentialNeighbours = [
    [i - 1, j], // up
    [i + 1, j], // down
    [i, j - 1], // left
    [i, j + 1], // right
  ];

  let neighbours: Cell[] = [];

  for (let [row, col] of potentialNeighbours) {
    if (row >= 0 && col >= 0 && row < maze.length && col < maze[0].length) {
      if (maze[row][col] !== 0) {
        neighbours.push([row, col]);
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

export const compareArrays = (arr1: any[], arr2: any[]): boolean => {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
};
