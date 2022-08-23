type T = { id: "1" };
type Ap = AppendToObject<T, "value", 4>; // expected to be { id: '1', value: 4 }

type AppendToObject<Obj, Key extends string, Value> = Obj & {
  [K in Key]: Value;
};

/**
 * // 本题答案 另一种方式
type AppendToObject<T, U extends number | string | symbol, V> = {
  [key in (keyof T) | U]: key extends U ? V : T[Exclude<key, U>]
}
 */
