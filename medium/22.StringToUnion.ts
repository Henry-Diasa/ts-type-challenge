type STest = "123";
type SResult = StringToUnion<STest>; // expected to be "1" | "2" | "3"

type StringToUnion<S extends string> = S extends `${infer F}${infer R}`
  ? F | StringToUnion<R>
  : S;

/**
 * // 本题答案
type StringToUnion<T, P = never> = T extends `${infer F}${infer R}` ? StringToUnion<R, P | F> : P
 */
