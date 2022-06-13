interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyPick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
// 不传递K相当于取T的所有K值
type MyPick<T, K extends keyof T = keyof T> = {
  [P in K]: T[P];
};
