export interface IQueue<T> {
  getStorage(): T[];
  enqueue(item: T): void;
  dequeue(): T | undefined;
  size(): number;
  has(item: T): boolean;
  isEmpty(): boolean;
}
