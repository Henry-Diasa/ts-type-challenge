type RemoveFirstDelimiter<Str extends string> =
  Str extends `${infer _}${infer Rest}` ? Rest : Str;

type JoinType<
  Items extends any[],
  Delimiter extends string,
  Result extends string = ""
> = Items extends [infer Cur, ...infer Rest]
  ? JoinType<Rest, Delimiter, `${Result}${Delimiter}${Cur & string}`>
  : RemoveFirstDelimiter<Result>;

declare function join<Delimiter extends string>(
  delimiter: Delimiter
): <Items extends string[]>(...parts: Items) => JoinType<Items, Delimiter>;

let joinRes = join("-")("aa", "dd");
