// 联合 => 交叉   父 => 子 逆变     子 => 父 协变   函数的参数是逆变的  返回值是协变的
type UnionToIntersection<U> = (
  U extends U ? (x: U) => unknown : never
) extends (x: infer R) => unknown
  ? R
  : never;
// returnType 是返回函数重载的最后一个返回值类型
type UnionToTuple<T> = UnionToIntersection<
  T extends any ? () => T : never //  T extends any 触发分发
> extends () => infer ReturnType // 获取最后一个返回值类型
  ? [...UnionToTuple<Exclude<T, ReturnType>>, ReturnType]
  : [];

type UnionToTupleRes = UnionToTuple<"a" | "b">;
