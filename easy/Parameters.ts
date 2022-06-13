type MyParameters<T> = T extends (...args: infer P) => any ? P : [];

type Fn = (a: string, b: number) => void;

type test = MyParameters<Fn>;
