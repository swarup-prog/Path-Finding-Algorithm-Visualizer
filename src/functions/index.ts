import { Queue } from "../classes";
import { compareArrays, getNeighbours, isVisited } from "../helpers";
import { Cell, Maze } from "../types";

export const breadthFirstSearch = (
  maze: Maze,
  start: Cell,
  end: Cell
): Cell[] => {
  console.log("Search started!");
  const queue = new Queue<Cell>();
  const visited: Cell[] = [];

  queue.enqueue(start);

  while (!queue.isEmpty()) {
    const current = queue.dequeue() as Cell;

    visited.push(current);

    if (compareArrays(current, end)) {
      console.log("Found the end!");
      break;
    }

    const neighbours = getNeighbours(maze, current);

    for (let neighbour of neighbours) {
      const neighbourVisited = isVisited(neighbour, visited);
      if (!neighbourVisited && !queue.has(neighbour)) {
        queue.enqueue(neighbour);
      }
    }
  }

  console.log(visited);
  return visited;
};

export const depthFirstSearch = (maze: Maze, start: Cell, end: Cell) => {};
