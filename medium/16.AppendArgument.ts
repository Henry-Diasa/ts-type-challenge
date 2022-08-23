type Fn5 = (a: number, b: string) => number;

type Result3 = AppendArgument<Fn, boolean>;
// expected be (a: number, b: string, x: boolean) => number
// 本题答案
type AppendArgument<F, E> = F extends (...args: infer T) => infer R
  ? (...args: [...T, E]) => R
  : F;
