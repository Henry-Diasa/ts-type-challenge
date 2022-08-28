type case11 = IsTuple<[number]>; // true
type case21 = IsTuple<readonly [number]>; // true
type case31 = IsTuple<number[]>; // false

// Tuple 与 Array 在 TS 里的区别是前者长度有限，后者长度无限，从结果来看，如果访问其 ['length'] 属性，前者一定是一个固定数字，而后者返回 number

type IsTuple<T> = [T] extends [never]
  ? false
  : T extends readonly any[]
  ? number extends T["length"] // 准确的判断出 number
    ? false
    : true
  : false;
