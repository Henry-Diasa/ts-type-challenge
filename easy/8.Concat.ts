// 用类型系统实现 Concat<P, Q>，将两个数组类型连起来：
type Result = Concat<[1], [2]>; // expected to be [1, 2]

// type Concat<T extends any[], P extends any[]> = [...T, ...P];

// 非数组支持
type Concat<T, P> = [
  ...(T extends any[] ? T : [T]),
  ...(P extends any[] ? P : [P])
];
