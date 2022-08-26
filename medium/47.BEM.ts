// 实现 BEM 函数完成其规则拼接
// Expect<Equal<BEM<'btn', [], ['small', 'medium', 'large']>, 'btn--small' | 'btn--medium' | 'btn--large' >>,
type IsNeverg<TValue> = TValue[] extends never[] ? true : false;
type SafeUnion<TUnion> = IsNeverg<TUnion> extends true ? "" : TUnion;

// 本题答案
// IsNever, SafeUnion
// 过下标将数组或对象转成联合类型，这里还有一个特殊情况，即字符串中通过这种方式申明每一项，会自动笛卡尔积为新的联合类型
type BEM<
  B extends string,
  E extends string[],
  M extends string[]
> = `${B}${SafeUnion<`__${E[number]}`>}${SafeUnion<`--${M[number]}`>}`;
