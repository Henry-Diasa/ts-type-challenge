type Flatten<T extends any[], Result extends any[] = []> = T extends [
  infer Start,
  ...infer Rest
]
  ? Start extends any[]
    ? Flatten<Rest, [...Result, ...Flatten<Start>]>
    : Flatten<Rest, [...Result, Start]>
  : Result;
type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]>; // [1, 2, 3, 4, 5]
