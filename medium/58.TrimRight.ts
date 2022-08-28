type Trimed = TrimRight23<"   Hello World    ">; // expected to be '   Hello World'

type TrimRight23<S extends string> = S extends `${infer R}${" " | "\n" | "\t"}`
  ? TrimRight<R>
  : S;
