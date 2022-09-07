type TupleToNestedObject1<Tuple extends unknown[], Value> = Tuple extends [
  infer First,
  ...infer Rest
]
  ? {
      [Key in First as Key extends keyof any // keyof any = string | number | symbol
        ? Key
        : never]: Rest extends unknown[]
        ? TupleToNestedObject<Rest, Value>
        : Value;
    }
  : Value;
type TupleToNestedObject1Res = TupleToNestedObject1<["a", "b", "c"], "2">;
