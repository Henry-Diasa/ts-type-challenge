interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview2 = MyOmit<Todo, "description" | "title">;

const todo2: TodoPreview2 = {
  completed: false,
};
// 其实仍然包含了 description、title 这两个 Key，只是这两个 Key 类型为 never，不符合要求。
// type MyOmit<T, K extends keyof T> = {
//   [P in keyof T]: P extends K ? never : T[P];
// };
// type Exclude<T, U> = T extends U ? never : T;
type MyOmit<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P];
};

// 本题优雅答案
// type MyOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
