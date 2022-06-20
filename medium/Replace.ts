type replaced = Replace<"types are fun!", "fun", "awesome">; // expected to be 'types are awesome!'
// 本题答案
type Replace<
  S extends string,
  From extends string,
  To extends string
> = S extends `${infer A}${From}${infer B}` ? `${A}${To}${B}` : S;
