import { IQueue } from "../interfaces/IQueue";
import { Cell } from "../types";

class Queue<T extends Cell> implements IQueue<T> {
  private storage: T[] = [];

  constructor(private capacity: number = Infinity) {}

  getStorage(): T[] {
    return this.storage;
  }

  enqueue(item: T): void {
    if (this.size() === this.capacity) {
      throw Error("Queue has reached max capacity, you cannot add more items");
    }
    this.storage.push(item);
  }
  dequeue(): T | undefined {
    return this.storage.shift();
  }
  size(): number {
    return this.storage.length;
  }

  has(item: T): boolean {
    return this.storage.some((i) => i[0] === item[0] && i[1] === item[1]);
  }

  isEmpty(): boolean {
    return this.storage.length === 0;
  }
}

export default Queue;
