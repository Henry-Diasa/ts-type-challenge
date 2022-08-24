type AA = IsNever<never>; // expected to be true
type BB = IsNever<undefined>; // expected to be false
type CC = IsNever<null>; // expected to be false
type D = IsNever<[]>; // expected to be false
type E = IsNever<number>; // expected to be false

// never 在泛型中的特殊性，它不会触发 extends 判断，而是直接终结返回never，致使判断无效
// type IsNever<T> = T extends never ? true : false;

type IsNever<T> = [T] extends [never] ? true : false;
