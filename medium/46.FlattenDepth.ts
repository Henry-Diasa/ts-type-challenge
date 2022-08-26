type afg = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>; // [1, 2, 3, 4, [5]]. flattern 2 times
type bg = FlattenDepth<[1, 2, [3, 4], [[[5]]]]>; // [1, 2, 3, 4, [[5]]]. Depth defaults to be 1

// 打平一次
type FlattenOnce<T extends any[], U extends any[] = []> = T extends [
  infer X,
  ...infer Y
]
  ? X extends any[]
    ? FlattenOnce<Y, [...U, ...X]>
    : FlattenOnce<Y, [...U, X]>
  : U;

// 本题答案
// FlattenOnce
type FlattenDepth<
  T extends any[],
  U extends number = 1,
  P extends any[] = []
> = P["length"] extends U // 只能通过辅助数组的length来判断是否达到 打平次数
  ? T
  : FlattenOnce<T> extends T // 已经打平  提前终止
  ? T
  : FlattenDepth<FlattenOnce<T>, U, [...P, any]>;
