// 实现 AnyOf 函数，任意项为真则返回 true，否则返回 false，空数组返回 false：

type Sample1 = AnyOf<[1, "", false, [], {}]>; // expected to be true.
type Sample2 = AnyOf<[0, "", false, [], {}]>; // expected to be false.

// 有问题  {} 并不表示空对象 而是所有对象类型
// type Falsy = "" | never | undefined | null | 0 | false | [];
type Falsy =
  | ""
  | never
  | undefined
  | null
  | 0
  | false
  | []
  | Record<PropertyKey, never>; //  Record<PropertyKey, never> 代表空对象
type AnyOf<T extends readonly any[]> = T extends Falsy[] ? false : true;
