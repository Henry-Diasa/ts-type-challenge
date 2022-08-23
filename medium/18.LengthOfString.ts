// infer 和 数组通过 ['length'] 获取长度值

type LengthOfString<S, R extends any[] = []> = S extends `${infer M}${infer E}`
  ? LengthOfString<E, [...R, M]>
  : R["length"];

type l = LengthOfString<"abc">;
