import { Queue } from "../classes";
import { getNeighbours, isVisited } from "../helpers";
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

    if (current === end) return visited;

    const neighbours = getNeighbours(maze, current);

    for (let neighbour of neighbours) {
      const neighbourVisited = isVisited(neighbour, visited);
      if (!neighbourVisited && !queue.has(neighbour)) {
        queue.enqueue(neighbour);
      }
    }
  }

  return visited;
};

export const depthFirstSearch = (maze: Maze, start: Cell, end: Cell) => {};
