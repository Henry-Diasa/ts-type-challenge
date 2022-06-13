type arr6 = ["a", "b", "c", "d"];
type arr7 = [3, 2, 1];

type re1 = Pop<arr6>; // expected to be ['a', 'b', 'c']
type re2 = Pop<arr7>; // expected to be [3, 2]

type Pop<T extends any[]> = T extends [...infer P, infer Q] ? P : never;
