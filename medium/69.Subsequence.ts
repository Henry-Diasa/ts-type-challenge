type Aasda = Subsequence<[1, 2]>; // [] | [1] | [2] | [1, 2]

// 本题答案
type Subsequence<T extends number[]> = T extends [
  infer F,
  ...infer R extends number[]
]
  ? Subsequence<R> | [F, ...Subsequence<R>]
  : T;
