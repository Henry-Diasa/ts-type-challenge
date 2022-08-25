// 实现 PartialByKeys<T, K>，使 K 匹配的 Key 变成可选的定义，如果不传 K 效果与 Partial<T> 一样：
interface User {
  name: string;
  age: number;
  address: string;
}

type UserPartialName = PartialByKeys<User, "name">; // { name?:string; age:number; address:string }

type Merge1<T> = {
  [K in keyof T]: T[K];
};
type PartialByKeys<T, K extends PropertyKey = keyof T> = Merge1<
  Partial<T> & Omit<T, K>
>;

// 利用 Partial & Omit 来合并对象。
// 因为 Omit<T, K> 中 K 有来自于 keyof T 的限制，而测试用例又包含 unknown 这种不存在的 Key 值，此时可以用 extends PropertyKey 处理此场景。
