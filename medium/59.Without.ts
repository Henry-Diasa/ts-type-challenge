type Res = Without<[1, 2], 1>; // expected to be [2]
type Res1 = Without<[1, 2, 4, 1, 5], [1, 2]>; // expected to be [4, 5]
type Res2 = Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>; // expected to be []

// 数组 => 联合
type ToUnion<T> = T extends any[] ? T[number] : T;

type Without<T, U> = T extends [infer H, ...infer R]
  ? H extends ToUnion<U> // 判断每一项是不是在联合类型中
    ? Without<R, U>
    : [H, ...Without<R, U>]
  : [];
