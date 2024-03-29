type capitalized = Capitalize1<"hello world">; // expected to be 'Hello world'

// Uppercase
type Capitalize1<T extends string> = T extends `${infer F}${infer U}`
  ? `${Uppercase<F>}${U}`
  : T;
