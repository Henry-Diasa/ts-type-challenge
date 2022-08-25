// 实现 RequiredByKeys<T, K>，使 K 匹配的 Key 变成必选的定义，如果不传 K 效果与 Required<T> 一样
interface User {
  name?: string;
  age?: number;
  address?: string;
}

type UserRequiredName = RequiredByKeys<User, "name">; // { name: string; age?: number; address?: string }
// 有问题
// type Merge4<T> = {
//   [K in keyof T]: T[K];
// };
// type RequiredByKeys<T, K extends PropertyKey = keyof T> = Merge4<
//   Required<T> & Omit<T, K>
// >;

// Merge4<
//   {
//     a: number;
//   } & {
//     a?: number;
//   }
// >; // 结果是 { a: number }
// 也就是同一个 Key 可选与必选同时存在时，合并结果是必选。上一题因为将必选 Omit 掉了，所以可选不会被必选覆盖，但本题 Merge<Required<T> & Omit<T, K>>，前面的 Required<T> 必选优先级最高，后面的 Omit<T, K> 虽然本身逻辑没错，但无法把必选覆盖为可选
// 本题答案
type Merge4<T> = {
  [K in keyof T]: T[K];
};
type RequiredByKeys<T, K extends PropertyKey = keyof T> = Merge4<
  T & Required<Pick<T, K extends keyof T ? K : never>> // 多个判断K为unknown
>;
