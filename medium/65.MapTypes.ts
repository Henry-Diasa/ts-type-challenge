type StringToNumber = {
  mapFrom: string; // value of key which value is string
  mapTo: number; // will be transformed for number
};
MapTypes<{ iWillBeANumberOneDay: string }, StringToNumber>; // gives { iWillBeANumberOneDay: number; }

// 本题答案
type MapTypes<T, R extends { mapFrom: any; mapTo: any }> = {
  [K in keyof T]: [T[K]] extends [R["mapFrom"]] ? Transform<R, T[K]> : T[K];
};

type Transform<R extends { mapFrom: any; mapTo: any }, T> = R extends any
  ? T extends R["mapFrom"]
    ? R["mapTo"]
    : never
  : never;
