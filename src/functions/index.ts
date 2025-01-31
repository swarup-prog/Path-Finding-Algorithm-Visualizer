import { Queue, Stack } from "../classes";
import { compareArrays, getNeighbours, isVisited } from "../helpers";
import { Cell, Maze } from "../types";

export const breadthFirstSearch = (
  maze: Maze,
  start: Cell,
  end: Cell
): Cell[] => {
  const queue = new Queue<Cell>();
  const visited: Cell[] = [];

  queue.enqueue(start);

  while (!queue.isEmpty()) {
    const current = queue.dequeue() as Cell;

    visited.push(current);

    if (compareArrays(current, end)) break;

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

export const depthFirstSearch = (
  maze: Maze,
  start: Cell,
  end: Cell
): Cell[] => {
  const stack = new Stack<Cell>();
  const visited: Cell[] = [];

  stack.push(start);

  while (!stack.isEmpty()) {
    const current = stack.pop() as Cell;

    visited.push(current);

    if (compareArrays(current, end)) break;

    const neighbours = getNeighbours(maze, current);

    for (let neighbour of neighbours) {
      const neighbourVisited = isVisited(neighbour, visited);
      if (!neighbourVisited && !stack.has(neighbour)) {
        stack.push(neighbour);
      }
    }
  }

  return visited;
};
