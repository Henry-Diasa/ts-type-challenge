// 实现类型 Awaited，比如从 Promise<ExampleType> 拿到 ExampleType。

// 考虑到嵌套 使用递归 infer
type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer P>
  ? P extends Promise<unknown>
    ? MyAwaited<P>
    : P
  : never;
