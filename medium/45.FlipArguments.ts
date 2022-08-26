// 实现 FlipArguments<T> 将函数 T 的参数反转
type Flipped = FlipArguments<
  (arg0: string, arg1: number, arg2: boolean) => void
>;
// (arg0: boolean, arg1: number, arg2: string) => void

// 本题答案
type Reverse1<T extends any[]> = T extends [...infer Rest, infer End]
  ? [End, ...Reverse<Rest>]
  : T;

type FlipArguments<T> = T extends (...args: infer Args) => infer Result
  ? (...args: Reverse1<Args>) => Result
  : never;
