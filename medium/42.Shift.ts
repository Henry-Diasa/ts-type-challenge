type Result123 = Shift<[3, 2, 1]>; // [2, 1]

type Shift<T> = T extends [infer L, ...infer R] ? R : never;
