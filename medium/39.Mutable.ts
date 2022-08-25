// 实现 Mutable<T>，将对象 T 的所有 Key 变得可写：
interface Todo {
  readonly title: string;
  readonly description: string;
  readonly completed: boolean;
}

type MutableTodo = Mutable<Todo>; // { title: string; description: string; completed: boolean; }

type Mutable<T> = {
  -readonly [K in keyof T]: T[K];
};
