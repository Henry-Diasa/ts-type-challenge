type ar = Reverse<["a", "b"]>; // ['b', 'a']
type br = Reverse<["a", "b", "c"]>; // ['c', 'b', 'a']

type Reverse<T> = T extends [...infer Rest, infer End]
  ? [End, ...Reverse<Rest>]
  : T;
