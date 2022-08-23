type replaced1 = ReplaceAll<"t y p e s", " ", "">; // expected to be 'types'

// 本题答案
type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = S extends `${infer A}${From}${infer B}`
  ? From extends ""
    ? `${A}${To}${B}`
    : ReplaceAll<`${A}${To}${B}`, From, To> // From匹配到 递归匹配
  : S;
