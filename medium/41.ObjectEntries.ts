interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}
type modelEntries = ObjectEntries<Model>; // ['name', string] | ['age', number] | ['locations', string[] | null];

// 本题答案
type RemoveUndefined<T> = [T] extends [undefined] ? T : Exclude<T, undefined>;
type ObjectEntries<T> = {
  [K in keyof T]-?: [K, RemoveUndefined<T[K]>]; // 把可选变成非可选
}[keyof T];

// 数组转换为 联合类型 可以通过number  例如 [1,2,3]['number'] => 1 | 2 | 3

// 同理对象 需要 {}[keyof T] 这种形式
