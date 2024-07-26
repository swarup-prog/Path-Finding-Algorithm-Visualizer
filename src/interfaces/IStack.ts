export interface IStack<T> {
  getStorage(): T[];
  push(item: T): void;
  pop(): T | undefined;
  peek(): T | undefined;
  isEmpty(): boolean;
  size(): number;
  has(item: T): boolean;
}
