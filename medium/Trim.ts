type trimmed = Trim<"  Hello World  ">; // expected to be 'Hello World'

// 本题答案
type Trim<T extends string> = TrimLeft<TrimRight<T>>;
type TrimLeft<T extends string> = T extends ` ${infer R}` ? TrimLeft<R> : T;
type TrimRight<T extends string> = T extends `${infer R} ` ? TrimRight<R> : T;

// 本题答案 更优雅
// type Trim<T extends string> =  T extends ` ${infer R}` | `${infer R} ` ? Trim<R> : T
