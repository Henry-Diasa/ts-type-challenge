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
