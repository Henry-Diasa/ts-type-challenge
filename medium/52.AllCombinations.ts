// 实现 AllCombinations<S> 对字符串 S 全排列
type AllCombinations_ABC = AllCombinations<"ABC">;
// should be '' | 'A' | 'B' | 'C' | 'AB' | 'AC' | 'BA' | 'BC' | 'CA' | 'CB' | 'ABC' | 'ACB' | 'BAC' | 'BCA' | 'CAB' | 'CBA'

type StrToUnion<S> = S extends `${infer F}${infer R}`
  ? F | StrToUnion<R>
  : never;
// 本题答案
type AllCombinations<S extends string, U extends string = StrToUnion<S>> = [
  U
] extends [never]
  ? ""
  : "" | { [K in U]: `${K}${AllCombinations<never, Exclude<U, K>>}` }[U]; // 对象转换联合类型的方式
