type Result11 = Fibonacci<3>; // 2
type Result21 = Fibonacci<8>; // 21

// 本题答案
type Fibonacci<
  T extends number,
  N extends number[] = [1],
  Prev extends number[] = [1],
  Cur extends number[] = [1]
> = N["length"] extends T
  ? Prev["length"]
  : Fibonacci<T, [...N, 1], Cur, [...Prev, ...Cur]>;
