// 实现 Flip<T>，将对象 T 中 Key 与 Value 对调
type f1 = Flip<{ a: "x"; b: "y"; c: "z" }>; // {x: 'a', y: 'b', z: 'c'}
type f2 = Flip<{ a: 1; b: 2; c: 3 }>; // {1: 'a', 2: 'b', 3: 'c'}
type f3 = Flip<{ a: false; b: true }>; // {false: 'a', true: 'b'}

type Flip<T extends Record<string, string | number | boolean>> = {
  // 限制value的类型
  [K in keyof T as `${T[K]}`]: K; // true不能作为key  需要转化为 字符串
};
