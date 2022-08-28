type Ga = GreaterThan<2, 1>; //should be true
type Gb = GreaterThan<1, 1>; //should be false
type Gc = GreaterThan<10, 100>; //should be false
type Gd = GreaterThan<111, 11>; //should be true

// 本题答案  构建辅助数组 长度先达到谁 谁就是小的
type GreaterThan<T, U, R extends number[] = []> = T extends R["length"]
  ? false
  : U extends R["length"]
  ? true
  : GreaterThan<T, U, [...R, 1]>;

// 判断数组 哪个长度大
type ArrGreaterThan<T extends 1[], U extends 1[]> = U extends [...T, ...any]
  ? false
  : true;
