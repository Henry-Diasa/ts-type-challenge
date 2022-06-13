interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

const todo3: MyReadonly2<Todo, "title" | "description"> = {
  title: "Hey",
  description: "foobar",
  completed: false,
};

todo3.title = "Hello"; // Error: cannot reassign a readonly property
todo3.description = "barFoo"; // Error: cannot reassign a readonly property
todo3.completed = true; // OK

// 先 Pick 出 K Key 部分设置为 Readonly，再用 & 合并上剩下的 Key
type MyReadonly2<T, K extends keyof T> = Readonly<Pick<T, K>> & Omit<T, K>;
