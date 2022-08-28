type Resfff = Join<["a", "p", "p", "l", "e"], "-">; // expected to be 'a-p-p-l-e'
type Res1a = Join<["Hello", "World"], " ">; // expected to be 'Hello World'
type Res2af = Join<["2", "2", "2"], 1>; // expected to be '21212'
type Res3 = Join<["o"], "u">; // expected to be 'o'

// 本题答案
type Join<T, U extends string | number> = T extends [
  infer F extends string,
  ...infer R extends string[]
]
  ? R["length"] extends 0
    ? F
    : `${F}${U}${Join<R, U>}`
  : "";
