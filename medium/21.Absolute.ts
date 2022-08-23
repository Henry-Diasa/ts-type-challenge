type Tes = -100;
type Res = Absolute<Tes>; // expected to be "100"

type Absolute<T extends number> = `${T}` extends `-${infer R}` ? R : `${T}`;
