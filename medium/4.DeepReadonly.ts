type X = {
  x: {
    a: 1;
    b: "hi";
  };
  y: "hey";
};

type Expected = {
  readonly x: {
    readonly a: 1;
    readonly b: "hi";
  };
  readonly y: "hey";
};

type Todo5 = DeepReadonly<X>; // should be same as `Expected`

type DeepReadonly<T> = T extends any // 这里为了触发ts计算 这样Todo5就可以全部展示出来
  ? {
      readonly [K in keyof T]: T[K] extends Object ? DeepReadonly<T[K]> : T[K];
    }
  : never;
