// type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">; // expected to be `false`

// https://github.com/microsoft/TypeScript/issues/27024#issuecomment-421529650
type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
  ? 1
  : 2
  ? true
  : false;

// type Includes<T extends any[], K> = K extends T[number] ? true : false;

// 反例 true、false 都继承自 boolean，所以 extends 判断的界限太宽了，题目要求的是精确值匹配
// T[number] 可以把数组的每一项转换成 联合类型
type isPillarMen = Includes<[boolean], false>; // true

type Includes<T extends any[], K> = T extends [infer F, ...infer Rest]
  ? Equal<F, K> extends true
    ? true
    : Includes<Rest, K>
  : false;
