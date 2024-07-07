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
  let stopper = 0;

  while (!queue.isEmpty()) {
    const current = queue.dequeue() as Cell;

    visited.push(current);

    if (current === end) return visited;

    const neighbours = getNeighbours(maze, current);
    console.log(
      `Visited: ${visited}\nCurrent: ${current}\nNeighbours: ${neighbours}`
    );

    for (let neighbour of neighbours) {
      const neighbourVisited = isVisited(neighbour, visited);
      console.log("Current Neighbour:", neighbour);
      console.log("Neighbour Visited:", neighbourVisited);
      if (!neighbourVisited && !queue.has(neighbour)) {
        queue.enqueue(neighbour);
        // console.log("Queue:", queue.getStorage());
      } else continue;
    } // if (stopper > 5) break;
    // stopper++;
  }

  console.log("Queue: ", queue.getStorage());
  console.log("Visited: ", JSON.stringify(visited.length));

  return visited;
};

export const depthFirstSearch = (maze: Maze, start: Cell, end: Cell) => {};
