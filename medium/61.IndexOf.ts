type Res11 = IndexOf<[1, 2, 3], 2>; // expected to be 1
type Res111 = IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>; // expected to be 2
type Res21 = IndexOf<[0, 0, 0], 2>; // expected to be -1

// 本题答案
type IndexOf<T, U, Index extends any[] = []> = T extends [infer F, ...infer R]
  ? Equal<F, U> extends true
    ? Index["length"]
    : IndexOf<R, U, [...Index, 0]>
  : -1;
