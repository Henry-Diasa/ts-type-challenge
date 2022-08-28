type result = NumberRange<2, 9>; //  | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

type LengthTo<N extends number, R extends any[] = []> = R["length"] extends N
  ? R
  : LengthTo<N, [0, ...R]>;

// 本题答案
type NumberRange<
  T extends number,
  P extends number,
  U extends any[] = LengthTo<T>,
  R extends number = never
> = U["length"] extends P
  ? R | U["length"]
  : NumberRange<T, P, [0, ...U], R | U["length"]>;
