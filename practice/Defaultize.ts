type Copy<Obj extends Record<string, any>> = {
  [Key in keyof Obj]: Obj[Key];
};

type Defaultize<A, B> = Copy<
  Pick<A, Exclude<keyof A, keyof B>> &
    Partial<Pick<A, Extract<keyof A, keyof B>>> &
    Partial<Pick<B, Exclude<keyof B, keyof A>>>
>;
type A2 = {
  aa: 11;
  bb: 22;
};

type A3 = {
  bb: 33;
  cc: 44;
};

type DefaultizeRes = Defaultize<A2, A3>;
