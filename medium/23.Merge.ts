type foo = {
  name: string;
  age: string;
};
type coo = {
  age: number;
  sex: string;
};

type MResult = Merge<foo, coo>; // expected to be {name: string, age: number, sex: string}

// 本题答案 注意 K in keyof A | keyof B  这种写法
type Merge<A extends object, B extends object> = {
  [K in keyof A | keyof B]: K extends keyof B
    ? B[K]
    : K extends keyof A
    ? A[K]
    : never;
};
