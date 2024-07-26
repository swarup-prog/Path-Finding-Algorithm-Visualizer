import { IStack } from "../interfaces/IStack";
import { Cell } from "../types";

class Stack<T extends Cell> implements IStack<T> {
  private storage: T[] = [];

  constructor(private capacity: number = Infinity) {}

  getStorage(): T[] {
    return this.storage;
  }

  push(item: T): void {
    if (this.size() === this.capacity) {
      throw Error("Stack has reached max capacity, you cannot add more items");
    }
    this.storage.push(item);
  }

  pop(): T | undefined {
    return this.storage.pop();
  }

  peek(): T | undefined {
    return this.storage[this.size() - 1];
  }

  size(): number {
    return this.storage.length;
  }

  isEmpty(): boolean {
    return this.storage.length === 0;
  }

  has(item: T): boolean {
    return this.storage.some((i) => i[0] === item[0] && i[1] === item[1]);
  }
}

export default Stack;
