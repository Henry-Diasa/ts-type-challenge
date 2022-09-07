type DeepCamelize<Obj extends Record<string, any>> = Obj extends unknown[]
  ? CamelizeArr<Obj>
  : {
      [Key in keyof Obj as Key extends `${infer First}_${infer Rest}`
        ? `${First}${Capitalize<Rest>}`
        : Key]: DeepCamelize<Obj[Key]>;
    };

type CamelizeArr<Arr> = Arr extends [infer First, ...infer Rest]
  ? [DeepCamelize<First>, ...CamelizeArr<Rest>]
  : [];

type obj = {
  aaa_bbb: string;
  bbb_ccc: [
    {
      ccc_ddd: string;
    },
    {
      ddd_eee: string;
      eee_fff: {
        fff_ggg: string;
      };
    }
  ];
};
type DeepCamelizeRes = DeepCamelize<obj>;
