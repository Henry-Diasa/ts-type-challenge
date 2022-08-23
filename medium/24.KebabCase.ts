type k = KebabCase<"FooBarBaz">; // 'foo-bar-baz'

// 本题答案
type KebabCase<S, U extends string = ""> = S extends `${infer F}${infer R}`
  ? Lowercase<F> extends F
    ? KebabCase<R, `${U}${F}`>
    : KebabCase<R, `${U}-${Lowercase<F>}`>
  : RemoveFirstHyphen<U>;

type RemoveFirstHyphen<S> = S extends `-${infer Rest}` ? Rest : S;
