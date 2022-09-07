type KebabCaseToCamelCase<Str extends string> =
  Str extends `${infer Item}-${infer Rest}`
    ? `${Item}${KebabCaseToCamelCase<Capitalize<Rest>>}`
    : Str;

type KebabCaseToCamelCaseRes = KebabCaseToCamelCase<"aa-bb-cc">;
