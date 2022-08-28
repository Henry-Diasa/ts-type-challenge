type Res1d = LastIndexOf<[1, 2, 3, 2, 1], 2>; // 3
type Res2d = LastIndexOf<[0, 0, 0], 2>; // -1

// 本题答案
type LastIndexOf<T, U> = T extends [...infer R, infer L]
  ? Equal<L, U> extends true
    ? R["length"] // 通过R["length"] 判断当前下标
    : LastIndexOf<R, U>
  : -1;
