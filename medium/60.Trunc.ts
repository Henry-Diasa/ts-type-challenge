// 实现 Math.trunc 相同功能的函数 Trunc

type Aasd = Trunc<12.34>; // 12

// 数字转换为 字符串
type Trunc<T extends string | number> = `${T}` extends `${infer H}.${infer R}`
  ? H
  : `${T}`;
