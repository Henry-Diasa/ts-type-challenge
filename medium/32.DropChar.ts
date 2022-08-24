type Butterfly = DropChar<" b u t t e r f l y ! ", " ">; // 'butterfly!'

type DropChar<S, C extends string> = S extends `${infer A}${C}${infer B}`
  ? `${A}${DropChar<B, C>}`
  : S;
