type Foo1 = {
  [key: string]: any;
  foo(): void;
};

type A1 = RemoveIndexSignature<Foo1>; // expected { foo(): void }

// 处理key 可以通过as断言    可以用 `${infer P}` 是否能识别到 P 来判断当前是否命中了字符串 Key
type RemoveIndexSignature<T> = {
  [K in keyof T as K extends `${infer P}` ? P : never]: T[K];
};
