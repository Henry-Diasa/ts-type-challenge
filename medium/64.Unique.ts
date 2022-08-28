type Resd = Unique<[1, 1, 2, 2, 3, 3]>; // expected to be [1, 2, 3]
type Res1da = Unique<[1, 2, 3, 4, 4, 5, 6, 7]>; // expected to be [1, 2, 3, 4, 5, 6, 7]
type Res2da = Unique<[1, "a", 2, "b", 2, "a"]>; // expected to be [1, "a", 2, "b"]
type Res3d = Unique<[string, number, 1, "a", 1, string, 2, "b", 2, number]>; // expected to be [string, number, 1, "a", 2, "b"]
type Res4 = Unique<[unknown, unknown, any, any, never, never]>; // expected to be [unknown, any, never]

// 本题答案
type Unique<T, R extends any[] = []> = T extends [infer F, ...infer Rest]
  ? Includes<R, F> extends true
    ? Unique<Rest, R>
    : Unique<Rest, [...R, F]>
  : R;
