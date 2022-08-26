// 实现 TupleToNestedObject<T, P>，其中 T 仅接收字符串数组，P 是任意类型，生成一个递归对象结构，满足如下结果：
type aasd = TupleToNestedObject<["a"], string>; // {a: string}
type basd = TupleToNestedObject<["a", "b"], number>; // {a: {b: number}}
type casd = TupleToNestedObject<[], boolean>; // boolean. if the tuple is empty, just return the U type

// 递归、辅助类型、infer、如何指定对象 Key、PropertyKey
// 数组从后往前 递归 Last extends PropertyKey 是必要的否则会报错
type TupleToNestedObject<T, U, R = U> = T extends []
  ? R
  : T extends [...infer Rest, infer Last extends PropertyKey]
  ? TupleToNestedObject<
      Rest,
      U,
      {
        [P in Last]: R;
      }
    >
  : never;
