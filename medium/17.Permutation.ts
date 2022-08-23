// 主要用到 联合类型 分发的特性 有一个注意点 就是 当 T extends never ？ 时，T=never会跳过分发 直接返回T本身

/**
 * 
type X = never extends never ? 1 : 0 // 1

type Custom<T> = T extends never ? 1 : 0
type Y = Custom<never> // never

 */

type Permutation<T, U = T> = [T] extends [never] // 终止条件 加上 [T] 是为了阻止分发
  ? []
  : T extends U
  ? [T, ...Permutation<Exclude<U, T>>]
  : [];

type p = Permutation<"a" | "b" | "c">;
