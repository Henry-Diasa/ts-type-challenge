type PartialObjectPropByKeys<
  Obj extends Record<string, any>,
  Key extends keyof any
> = Partial<Pick<Obj, Extract<keyof Obj, Key>>> & Omit<Obj, Key>;

interface Dong {
  name: string;
  age: number;
  address: string;
}

type PartialObjectPropByKeysRes = PartialObjectPropByKeys<Dong, "name" | "age">;
