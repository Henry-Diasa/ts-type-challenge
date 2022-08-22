type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

type head1 = First<arr1>; // expected to be 'a'
type head2 = First<arr2>; // expected to be 3
type head3 = First<[]>; // expected to be never

// 第一种写法通过 extends [] 判断 T 是否为空数组，是的话返回 never。
// type First<T extends any[]> = T extends [] ? never : T[0];
// 第二种写法通过长度为 0 判断空数组，此时需要理解两点：1. 可以通过 T['length'] 让 TS 访问到值长度（类型的），2. extends 0 表示是否匹配 0，即 extends 除了匹配类型，还能直接匹配值。
// type First<T extends any[]> = T["length"] extends 0 ? never : T[0];

// infer extends 的使用
type First<T extends unknown[]> = T extends [infer P, ...infer Rest]
  ? P
  : never;
