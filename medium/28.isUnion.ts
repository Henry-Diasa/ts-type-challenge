type case1 = IsUnion<string>; // false
type case2 = IsUnion<string | number>; // true
type case3 = IsUnion<[string | number]>; // false

type IsUnion<A, B = A> = IsNever<A> extends true
  ? false
  : A extends A // 触发分发  a | b 分发为 a 和 b 而 如果 [B]（整体） extends [A]（其中一项） 为true 证明不是union
  ? [B] extends [A]
    ? false
    : true
  : false;
