// 实现函数 PromiseAll，输入 PromiseLike，输出 Promise<T>，其中 T 是输入的解析结果：
// { [K in keyof T]: T[K] } 在 TS 同样适用于描述数组
const promiseAllTest1 = PromiseAll([1, 2, 3] as const);
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const);
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)]);

declare function PromiseAll<T>(values: T): Promise<{
  [K in keyof T]: T[K] extends Promise<infer U> ? U : T[K];
}>;
