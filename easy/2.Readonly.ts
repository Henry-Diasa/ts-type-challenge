interface Todo1 {
  title: string;
  description: string;
}

const todo1: MyReadonly<Todo1> = {
  title: "Hey",
  description: "foobar",
};

todo1.title = "Hello"; // Error: cannot reassign a readonly property
todo1.description = "barFoo"; // Error: cannot reassign a readonly property

type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};
// 延伸 所有的Key设置为可选
// 可以通过 - 来取消限制 例如
/**
 * 
 type Optional<T> = {
  [K in keyof T]-?: T[K];
  };
 */
type Optional<T> = {
  [K in keyof T]?: T[K];
};
