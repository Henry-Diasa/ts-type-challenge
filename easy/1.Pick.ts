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
// 传递的K必须限制是 T的key
type MyPick<T, K extends keyof T = keyof T> = {
  [P in K]: T[P];
};
