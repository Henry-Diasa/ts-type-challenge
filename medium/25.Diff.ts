type Foo = {
  name: string;
  age: string;
};
type Bar = {
  name: string;
  age: string;
  gender: number;
};

type d = Diff<Foo, Bar>; // { gender: number }

type Diff<A, B> = {
  [K in
    | Exclude<keyof A, keyof B>
    | Exclude<keyof B, keyof A>]: K extends keyof A
    ? A[K]
    : K extends keyof B
    ? B[K]
    : never;
};
